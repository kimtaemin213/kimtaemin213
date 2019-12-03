


//set one of light
void set_light(int id,int value){
  dim[id]=128-value;
}


//test dimming of one light 
void dim_test(int id){
  for(int i=128;i>0;i--){
    set_light(id,i);
    delay(5);
  }
  for(int i=128;i>0;i--){
    set_light(id,i);
    delay(5);
  }
}

void smooth_blink(int id,int dim_step){
  for(int i=128;i>0;i--){
    set_light(id,i);
    delay(dim_step);
  }
  for(int i=128;i>0;i--){
    set_light(id,i);
    delay(dim_step);
  }
}




void dim_test_all(){
  for(int i=0;i<128;i++){
    set_all_lights(i);
    delay(10);
  }
  for(int i=128;i>0;i--){
    set_all_lights(i);
    delay(10);
  }
}


void set_all_lights(int value){
  for(int i=0;i<12;i++){
    set_light(i,value);
  }
}


