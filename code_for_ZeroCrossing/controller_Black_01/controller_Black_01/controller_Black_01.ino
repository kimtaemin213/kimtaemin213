
/////////////////////////Libraries
#include <TimerOne.h>           // Avaiable from http://www.arduino.cc/playground/Code/Timer1


//////////////////////// Mode_Check
const int MODE_A=0;
const int MODE_B=1;
const int MODE_C=2;
int mode;
int prev_mode;


//////////////////////////Message Enable
boolean enable_msg=true;


/////////////////////// AC_Control
volatile int cnt=0;               // Variable to use as a counter
volatile boolean zero_cross=0;  // Boolean to store a "switch" to tell us if we have crossed zero
int freqStep = 65;    // This is the delay-per-brightness step in microseconds.

int AC_Pins[]={
  A5,3,4,5,6,7,8,9,10,11,12,13};
int AC_Values[] = {
  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0}; 
int dim[] = {
  128,128,128,128,128,128,128,128,128,128,128,128,128,128,128,128};  



///////////////////////// Analog_Sensing
int a0,a1,a2,a3,a4,a5;

//time_count_variable
unsigned long time_cnt=0; 



//////////////////////////// Loop
void loop() {
  mode_chk();
  time_cnt++;
  //check_Analog_input();  
}

boolean mode_chk(){
  analogReadFunction();
  switch(getMode()){
  case MODE_A:
    mode_A();
    break;
  case MODE_B:
    mode_B();
    break;
  case MODE_C:
    mode_C();
    break;
  }
}

int getMode(){
  if(a1>500&&a2<500){
    mode=MODE_A;
  } 
  else if(a1<500&&a2>500){
    mode=MODE_C;
  }
  else{
    mode=MODE_B;
  }
  //trace(mode);
  return mode;
}






