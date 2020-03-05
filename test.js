II initialize the counter and the array var numbernames=O;
var names = new Array (); function SortNames () {
II Get the name from the text field 
thename=document.the  form.newname.value;
II Add the name to the array names [numbernames)=thenam e; 
II Increment the counter 
numbernames++;
II Sort the array
names.sort (); document.theform.sorted.value=names  .join("\n");

