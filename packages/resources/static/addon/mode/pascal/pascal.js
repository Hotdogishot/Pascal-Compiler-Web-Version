(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("pascal",function(){function m(a,c){var b=a.next();if("#"==b&&c.startOfLine)return a.skipToEnd(),"meta";if('"'==b||"'"==b)return c.tokenize=n(b),c.tokenize(a,c);if("("==b&&a.eat("*"))return c.tokenize=g,g(a,c);if("{"==b)return c.tokenize=h,h(a,c);if(/[\[\]\(\),;:\.]/.test(b))return null;if(/\d/.test(b))return a.eatWhile(/[\w\.]/),
"number";if("/"==b&&a.eat("/"))return a.skipToEnd(),"comment";if(k.test(b))return a.eatWhile(k),"operator";a.eatWhile(/[\w\$_]/);b=a.current().toLowerCase();return p.propertyIsEnumerable(b)?"keyword":q.propertyIsEnumerable(b)?"atom":"variable"}function n(a){return function(c,b){for(var d=!1,f,l=!1;null!=(f=c.next());){if(f==a&&!d){l=!0;break}d=!d&&"\\"==f}if(l||!d)b.tokenize=null;return"string"}}function g(a,c){for(var b=!1,d;d=a.next();){if(")"==d&&b){c.tokenize=null;break}b="*"==d}return"comment"}
function h(a,c){for(var b;b=a.next();)if("}"==b){c.tokenize=null;break}return"comment"}var p=function(a){var c={};a=a.split(" ");for(var b=0;b<a.length;++b)c[a[b]]=!0;return c}("and array asm begin case class const constructor destructor div do downto else end except exports file finalization finally for goto if implementation in inherited initialization interface label library mod nil not object of or packed program property raise record repeat set shl shr string then to try type unit until uses var while with xor function procedure abs absolute addr append arctan assembler assign assigncrt blockread blockwrite boolean byte char chdir chr close clreol clrscr concat copy cos createdir crt cseg cursorto dec delay delete diskfree disksize dispose donewincrt dosversion double dseg eof eoln erase exit exp export external false far fileexpand filepos filesearch filesize filesplit fillchar findfirst findnext flush forward frac freemem getargcount getargstr getcurdir getdate getdir getenvvar getfattr getftime getmem gettime getverify gotoxy halt hi inc index initwincrt insert int integer interrupt ioresult keypressed length ln lo longint maxavail mkdir move name near new odd ofs ord packtime paramcount paramstr pi pos pred private ptr random randomize read readbuf readkey readln real removedir rename reset resident rewrite rmdir round runerror scrollto seek seekeof seekeoln seg setcurdir setdate setfattr setftime settextbuf settime setverify shortint sin sizeof sqr sqrt str succ swap text trackcursor true trunc truncate unpacktime upcase val virtual wherex wherey windos word write writebuf writechar writeln And Array Asm Begin Case Class Const Constructor Destructor Div Do DownTo Else End Except Exports File Finalization Finally For Goto If Implementation In Inherited Initialization Interface Label Library Mod Nil Not Object Of Or Packed Program Property Raise Record Repeat Set Shl Shr String Then To Try Type Unit Until Uses Var While With Xor Function Procedure Abs Absolute Addr Append ArcTan Assembler Assign AssignCrt BlockRead BlockWrite Boolean Byte Char ChDir Chr Close ClrEOL ClrScr Concat Copy Cos CreateDir Crt CSeg CursorTo Dec Delay Delete DiskFree DiskSize Dispose DoneWinCRT DosVersion Double DSeg Eof Eoln Erase Exit Exp Export External False Far FileExpand FilePos FileSearch FileSize FileSplit FillChar FindFirst FindNext Flush Forward Frac FreeMem GetArgCount GetArgStr GetCurDir GetDate GetDir GetEnvVar GetFAttr GetFTime GetMem GetTime GetVerify GotoXY Halt Hi Inc Index InitWinCrt Insert Int Integer Interrupt IOResult KeyPressed Length Ln Lo LongInt MaxAvail MkDir Move Name Near New Odd Ofs Ord PackTime ParamCount ParamStr Pi Pos Pred Private Ptr Random Randomize Read ReadBuf ReadKey Readln Real RemoveDir Rename Reset Resident ReWrite RmDir Round RunError ScrollTo Seek SeekEof SeekEoln Seg SetCurDir SetDate SetFAttr SetFTime SetTextBuf SetTime SetVerify Shortint Sin SizeOf Sqr Sqrt Str Succ Swap Text TrackCursor True Trunc Truncate UnpackTime Upcase Val Virtual WhereX WhereY WinDos Word Write WriteBuf WriteChar WriteLn"),
q={"null":!0},k=/[+\-*&%=<>!?|\/]/;return{startState:function(){return{tokenize:null}},token:function(a,c){return a.eatSpace()?null:(c.tokenize||m)(a,c)},electricChars:"{}",fold:"pascal-fold"}});e.defineMIME("text/x-pascal","pascal")});
