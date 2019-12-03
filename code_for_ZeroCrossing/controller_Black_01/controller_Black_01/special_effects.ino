int seed=500;

void wave(){
  //test dimming of one light 
  if(time_cnt>seed){
    trace("blink!");
    random_blink();
    clear_all();
    delay(int(random(500,2000)));
    seed=random(300,1000);
    time_cnt=0;
  }
  else{
    for(int i=0;i<12;i++){
      //float val=94*sin(radians(time_cnt)+radians(i*40))+random(30);
      float val=100*sin(radians(time_cnt)+radians(i*40))+a0/50;
      set_light(i,int(val));
    }
  }
  //trace(time_cnt);
}



void random_blink(){
  int rand=int(random(1,10));
  if(rand>5){
    step_01();
  }
  else{
    for(int i=0;i<rand;i++){
      set_all_lights(127);
      delay(20);
      set_all_lights(0);
      delay(20);
    }
  }
}

void step_01(){
  clear_all();
  smooth_blink(0,int(random(20)));
  smooth_blink(1,int(random(20)));
  smooth_blink(2,int(random(20)));
  smooth_blink(3,int(random(20)));
  smooth_blink(4,int(random(20)));
  smooth_blink(5,int(random(20)));
  smooth_blink(6,int(random(20)));
  smooth_blink(7,int(random(20)));
  smooth_blink(8,int(random(20)));
  smooth_blink(9,int(random(20)));
  smooth_blink(10,int(random(20)));
  smooth_blink(11,int(random(20)));



}




