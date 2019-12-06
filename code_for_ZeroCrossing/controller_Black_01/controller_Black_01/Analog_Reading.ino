void analogReadFunction(){
  a0 = analogRead(A0);     
  a1 = analogRead(A1);     
  a2 = analogRead(A2);  
}

void check_Analog_input(){
  Serial.print("A0 = " );                       
  Serial.print(a0); 
  Serial.print(" | " );    
  Serial.print("A1 = ");      
  Serial.print(a1); 
  Serial.print(" | " );   
  Serial.print("A2 = ");      
  Serial.print(a2);   
  Serial.println("  " ); 
  delay(10);  
}
