boolean debugging=true;


void trace(int val){
  if(debugging){
    Serial.println(val); 
  }
}

void trace(String str){
  if(debugging){
    Serial.println(str); 
  }
}

int CHECK_LED_PIN=13;
void Blink(int cnt,int dly){
  for(int i=0;i<cnt;i++){
    digitalWrite(CHECK_LED_PIN,1);
    delay(dly);
    digitalWrite(CHECK_LED_PIN,0);
    delay(dly);
  }
}


int stringToNumber(String thisString) {
  int i, value = 0, length;
  length = thisString.length();
  for(i=0; i<length; i++) {
    if(thisString.charAt(i)>=(int)'0'&&thisString.charAt(i)<=(int)'9'){
      value = (10*value) + thisString.charAt(i)-(int)'0';
    }
    else{
      value=-1; 
    }
  }
  return value;
}
