Blockly.Blocks['nao_says'] = {
init: function() {
    this.appendValueInput("speech")
    .setCheck("String")
    .appendField("Nao Says:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(152);
    this.setTooltip('Attach a string block to make NAO say what you type.');
    this.setHelpUrl('#section3');
}
};

Blockly.Blocks['begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Begin NAO Program");
    this.setInputsInline(true);
    this.setNextStatement(true);
    this.setColour(30);
    this.setTooltip('Does nothing');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['input_text'] = {
init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput("text"), "input_text");
    this.setOutput(true, "String");
    this.setColour(0);
    this.setTooltip('Converts numbers to strings.');
    this.setHelpUrl('section3');
}
};

Blockly.Blocks['speech_recognition'] = {
init: function() {
    this.appendValueInput("Word_List")
    .setCheck("Array")
    .appendField("Recognize word from list:");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('Nao will listen for a word and match it to one of the words in the list.');
    this.setHelpUrl('#section3');
}
};

Blockly.Blocks['waitforsensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for")
        .appendField(new Blockly.FieldDropdown([["Head Front", "Head/Touch/Front"], ["Head Middle", "Head/Touch/Middle"], ["Head Rear", "Head/Touch/Rear"], ["Left Hand", "LHand"], ["Right Hand", "RHand"], ["Left Foot Bumper", "LFoot/Bumper"], ["Right Foot Bumper", "RFoot/Bumper"]]), "sensor_name")
        .appendField("to be touched");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(345);
    this.setTooltip('Nao will not do anything until the selected sensor is touched.');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['is_touched'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Is")
        .appendField(new Blockly.FieldDropdown([["Head Front", "Head/Touch/Front"], ["Head Middle", "Head/Touch/Middle"], ["Head Rear", "Head/Touch/Rear"], ["Left Hand", "LHand"], ["Right Hand", "RHand"], ["Left Foot Bumper", "LFoot/Bumper"], ["Right Foot Bumper", "RFoot/Bumper"]]), "sensor_name")
        .appendField("begin touched?");
    this.setOutput(true);
    this.setColour(345);
    this.setTooltip('Returns true if the selected sensor is being touched, false otherwise.');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['string'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(null)
        .appendField("\"");
    this.appendDummyInput()
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(165);
    this.setTooltip('Converts all other data types (like numbers) to strings (text)');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['run_behavior'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start Behavior");
    // this.appendDummyInput()
    //     .appendField("Folder Name:")
    //     .appendField(new Blockly.FieldTextInput("default"), "folder");
    this.appendDummyInput()
        .appendField("Behavior Name:")
        .appendField(new Blockly.FieldTextInput("default"), "file");
    this.appendDummyInput()
        .appendField("Blocking:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "Blocking");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('Runs behavior stored on robot. Blocking on if you want the behavior to finish before moving on to the next block');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['recognize_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recognize Image");
    this.setOutput(true);
    this.setColour(210);
    this.setTooltip('NAO looks for images he recognizes. Database must already be loaded on robot.');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['stop_behavior'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop Behavior");
    // this.appendDummyInput()
    //     .appendField("Folder:")
    //     .appendField(new Blockly.FieldTextInput("default"), "folder");
    this.appendDummyInput()
        .appendField("File:")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('Finds a behavior preloaded on NAO and runs it. Blocking on means the behavior must stup before the program continues');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['robot_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set robot state to")
        .appendField(new Blockly.FieldDropdown([["awake", "on"], ["resting", "off"]]), "motorState");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(255);
    this.setTooltip('Sets the robot\'s motors to engaged or disengaged safely');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['wait_finished'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait until")
        .appendField(new Blockly.FieldTextInput("behavior"), "NAME")
        .appendField("finished");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(255);
    this.setTooltip('Stops the program from continuing until a certain behavior finishes.');
    this.setHelpUrl('#section3');
  }
};

Blockly.Blocks['list_by_index'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Entry #");
    this.appendDummyInput()
        .appendField("of list")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(270);
    this.setTooltip('Refers to an entry in the list by its index. 0 is the first item in the list.');
    this.setHelpUrl('#section3');
  }
};
