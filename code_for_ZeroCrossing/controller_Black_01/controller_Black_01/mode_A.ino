
String words[]={
  "mother",
  "father",
  "apple",
  "pie",
  "sister",
  "brother",
  "love",
  "hate",
  "peace",
  "Test"
};

void mode_A(){
  //  //check_mode_change();
  //  ////////////to Do
  //  //trace(sizeof(words));
  //  
  //  //dim = analogRead(POT_pin) / 8;  
  //  //analogWrite(LED, dim);
  //
  //  //trace("modeA");
  //
  //  //dim_test_all();
  //  dim_test(4);


  check_mode_change();

  wave();

}

void clear_all(){
  trace("clear!!");
  time_cnt=0;
  set_all_lights(0);
}

void check_mode_change(){
  if(prev_mode!=mode){
    Serial.println("mode: "+String(mode));
    clear_all(); 
    prev_mode=mode;
  }
}


void when_mode_changed(){
  clear_all(); 
}






