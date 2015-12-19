Blockly.Python['nao_says'] = function(block) {
    var value_speech = Blockly.Python.valueToCode(block, 'speech', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.

    var code = 'naoTalk.say(' + value_speech + ')\n';

    return code;
};

Blockly.Python['waitforsensor'] = function(block) {
  var dropdown_sensor_name = block.getFieldValue('sensor_name');
  // TODO: Assemble Python into code variable.
  var code = 'waitForSensor("' + dropdown_sensor_name + '")\n';
  return code;
};

Blockly.Python['is_touched'] = function(block) {
  var dropdown_sensor_name = block.getFieldValue('sensor_name');
  // TODO: Assemble Python into code variable.
  var code = 'getSensorStatus("' + dropdown_sensor_name + '")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['begin'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '';
  return code;
};

Blockly.Python['input_text'] = function(block) {
    var text_input_text = block.getFieldValue('input_text');
    // TODO: Assemble Python into code variable.
    var code = '"' + text_input_text + '"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['speech_recognition'] = function(block) {
    var value_word_list = Blockly.Python.valueToCode(block, 'Word_List', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'listenForWords(' + value_word_list + ')\n'

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['string'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'str(' + value_input + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['run_behavior'] = function(block) {
  var text_folder = block.getFieldValue('folder');
  var text_file = block.getFieldValue('file');
  var checkbox_blocking = block.getFieldValue('Blocking') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = 'launchBehavior(' + text_file + ', ' + checkbox_blocking + ')\n';
  return code;
};

Blockly.Python['recognize_image'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'seeImage()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['stop_behavior'] = function(block) {
  var text_folder = block.getFieldValue('folder');
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'stopBehavior(' + text_name + ')\n';
  return code;
};

Blockly.Python['robot_state'] = function(block) {
  var dropdown_motorstate = block.getFieldValue('motorState');
  // TODO: Assemble Python into code variable.
  var code = 'setStiffness(' + dropdown_motorstate + ')\n';
  return code;
};

Blockly.Python['wait_finished'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'while behavior_manager.isBehaviorRunning(' + text_name + '):\n';
  code += '\ttime.sleep(0.2)\n';
  return code;
};

Blockly.Python['list_by_index'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_name+ '[' + value_name + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
