int morse_pattern[]={
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

void mode_C(){
  int rand=random(2,10);
  //check_mode_change();
  int mic_sensing=constrain(a0,50,1024);
  int remap=map(a0,50,1024,0,127);
  //set_all_lights(remap);


  if(time_cnt>rand*8){
    for(int i=0;i<12;i++){
      //if(i%3==1){
       if(i==0||i==1||i==2){
        set_light(i,0);
      }
      else{
        set_light(i,constrain(morse_pattern[i]*127,0,127));
      }
      if(morse_pattern[i]>0){
        morse_pattern[i]-=1;
      }
      else{
        if(a0%20==0){
          morse_pattern[i]=random(0,3);
        }
      }

    }
    time_cnt=0;
  }

}



void refresh(){
  for(int i=0;i<12;i++){
    morse_pattern[i]=random(0,3);
  }
}






