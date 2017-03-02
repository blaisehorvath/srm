/**
 * Created by blaise on 2017.03.02..
 */
import React from 'react';

const Embedded = () => <div>
  <h2>Design</h2>
  <p>The first part of an electronics system is the schematic design and PCB routing: for this we’re mainly using
        KiCAD,
        our other choices would be Eagle and Altium Designer.</p>
  <h2>Prototyping</h2>
  <p>The second part is the prototyping: we’re able to make our own double sided PCBs for rapid prototyping, and we
        also know how to solder various SMD components.</p>
  <h2>Familiar MCUs</h2>
  <p>On the microcontroller side we’re familiar with the following MCU families: MSP430, Atmega, STM32, PIC18 and
        8085/8051.</p>
  <h2>FPGA experience</h2>
  <p>Viktor also have FPGA development experience with Xilinx FPGAs using Verilog. The reference for these kind of
        jobs is an FPGA tetris with VGA output, PS2 keyboard handling and a wavetable synth.</p>
</div>;

export default Embedded;
