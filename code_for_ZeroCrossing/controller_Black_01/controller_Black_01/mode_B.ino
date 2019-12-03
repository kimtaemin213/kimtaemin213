
void mode_B(){
  check_mode_change();
  int mic_sensing=constrain(a0,50,1024);
  int remap=map(a0,50,1024,0,127);
  wave_slow(remap);
  //dim_test_all();

}


void wave_slow(int remap){
  for(int i=0;i<12;i++){
    //float val=94*sin(radians(time_cnt)+radians(i*40))+random(30);
    
    /////////////////////////////////////////////////////////////////////////////
    int amp=40; //0-80 
    int threshhold=20; // 0~127
    /////////////////////////////////////////////////////////////////////////////
    
    float val=amp*sin(radians(time_cnt/10)+radians(i*30))+remap;
    if(remap>threshhold){
      set_light(i,127);
    }else{
    set_light(i,int(val));
    }
  }
}

