void msg(int val){
  if(enable_msg){
    Serial.println(String(val)); 
  }
}

void msg(String str){
  if(enable_msg){
    Serial.println(str); 
  }
}
