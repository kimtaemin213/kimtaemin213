
////////////////////////// Setup
void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600); 
  attachInterrupt(0, zero_cross_detect, RISING);   // Attach an Interupt to Pin 2 (interupt 0) for Zero Cross Detection
  Timer1.initialize(freqStep);                      // Initialize TimerOne library for the freq we need
  Timer1.attachInterrupt(dim_check, freqStep);    
  for(int i=0;i<12;i++){
    pinMode(AC_Pins[i],OUTPUT);
  }
  
}

