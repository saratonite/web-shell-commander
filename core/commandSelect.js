var platform = require('./platform');
var commands = require('./../commands/'+platform);
console.log(commands);
var _ = require('underscore');
function commandSelect(condition){

  console.log('The condition');
  console.log(condition);

  return _.find(commands,function(cmd){
    if(condition.command == cmd.name){
      return cmd;
    }
    return false;
  });

}

module.exports = commandSelect;
