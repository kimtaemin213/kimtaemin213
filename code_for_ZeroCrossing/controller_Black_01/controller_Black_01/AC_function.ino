



void zero_cross_detect() {    
  zero_cross = true;               // set the boolean to true to tell our dimming function that a zero cross has occured
  cnt=0;
  for(int i=0;i<12;i++){
    digitalWrite(AC_Pins[i], LOW);
  }
}                                 

// Function will fire the triac at the proper time
void dim_check() {    
  if(zero_cross){
    for(int i=0;i<12;i++){  
      if(cnt>dim[i]) {                     
        digitalWrite(AC_Pins[i], HIGH);
      }
    }  
    cnt++;
    if(cnt>127){  
      zero_cross = false;                
    }
  }
}






