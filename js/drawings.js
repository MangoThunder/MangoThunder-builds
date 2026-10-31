/*
 * Hand-traced outline drawings for real builds, in a 640×280 box.
 * The site colors them to match the paper style, so they need no colors of their own.
 * A build uses the drawing whose key matches its id (or its "drawing" field).
 * Shapes are listed back to front; class="nf" marks a line with no fill.
 * Drawings traced in screenshot pixels sit in a group with class="scaled" and
 * --k set to the same scale, so their lines come out the same thickness.
 */
window.GUN_DRAWINGS = {
  // Mirrored so the muzzle points left, like the K437.
  "kc-17": `<g transform="matrix(-1 0 0 1 640 0)">
      <rect x="20" y="79" width="20" height="109" rx="4" pathLength="1"/>
      <path fill-rule="evenodd" d="M40 92 H152 V121 L85 180 H40 Z M60 107 H125 L76 160 H60 Z" pathLength="1"/>
      <rect x="48" y="67" width="80" height="15" rx="4" pathLength="1"/>
      <path class="nf" d="M80 82 V92 M108 82 V92" pathLength="1"/>
      <rect x="152" y="89" width="14" height="33" rx="2" pathLength="1"/>
      <rect x="195" y="125" width="158" height="19" pathLength="1"/>
      <path fill-rule="evenodd" d="M212 144 H245 L232 205 H200 Z M217 155 H235 L228 188 H214 Z" pathLength="1"/>
      <path class="nf" d="M248 144 L250 165 H285 V144 M260 148 Q266 153 262 158" pathLength="1"/>
      <path d="M292 144 H326 Q332 190 356 218 L366 214 L368 224 L330 242 L324 234 Q300 200 292 144 Z" pathLength="1"/>
      <path class="nf" d="M300 162 L328 158 M310 188 L336 182" pathLength="1"/>
      <path fill-rule="evenodd" d="M413 130 H476 L471 174 H432 Z M430 140 H462 L456 163 H440 Z" pathLength="1"/>
      <rect x="166" y="87" width="233" height="38" pathLength="1"/>
      <path class="nf" d="M240 100 H300 M360 104 H392" pathLength="1"/>
      <rect x="399" y="89" width="91" height="41" pathLength="1"/>
      <rect x="412" y="102" width="20" height="10" rx="5" pathLength="1"/>
      <rect x="440" y="102" width="20" height="10" rx="5" pathLength="1"/>
      <rect x="468" y="102" width="14" height="10" rx="5" pathLength="1"/>
      <rect x="490" y="105" width="26" height="12" pathLength="1"/>
      <rect x="516" y="95" width="104" height="31" rx="12" pathLength="1"/>
      <path class="nf" d="M532 96 V125" pathLength="1"/>
      <rect x="183" y="79" width="305" height="8" pathLength="1"/>
      <path class="nf" d="M193 79v8 M213 79v8 M233 79v8 M253 79v8 M273 79v8 M293 79v8 M313 79v8 M333 79v8 M353 79v8 M373 79v8 M393 79v8 M413 79v8 M433 79v8 M453 79v8 M473 79v8" pathLength="1"/>
      <rect x="300" y="70" width="48" height="9" pathLength="1"/>
      <path d="M305 70 V49 H340 L347 63 V70 Z" pathLength="1"/>
      <path class="nf" d="M313 58 H334" pathLength="1"/>
    </g>`,

  // Traced from the Gunsmith screenshot; the scale fits it into the 640×280 box.
  "k437": `<g class="scaled" style="--k:0.47" transform="translate(40 12) scale(0.47) translate(-475 -225)">
      <path d="M1445 338 L1640 348 L1640 512 L1600 512 L1588 448 L1540 444 L1536 508 L1512 508 L1508 418 L1445 404 Z" pathLength="1"/>
      <path d="M1470 360 L1615 366 L1615 420 L1470 405 Z" pathLength="1"/>
      <rect x="1636" y="346" width="32" height="168" rx="8" pathLength="1"/>
      <rect x="1350" y="334" width="100" height="38" rx="4" pathLength="1"/>
      <rect x="536" y="365" width="120" height="16" rx="3" pathLength="1"/>
      <rect x="478" y="358" width="60" height="28" rx="5" pathLength="1"/>
      <line x1="496" y1="364" x2="496" y2="380" pathLength="1" class="nf"/>
      <line x1="514" y1="364" x2="514" y2="380" pathLength="1" class="nf"/>
      <rect x="650" y="352" width="40" height="42" rx="4" pathLength="1"/>
      <path fill-rule="evenodd" d="M735 412 L948 412 L940 534 L826 536 Q800 534 788 512 Z M808 438 L914 438 L910 508 L840 508 Q826 506 820 494 Z" pathLength="1"/>
      <path d="M996 450 L1094 450 L1082 640 L1062 692 L962 684 L974 640 Z" pathLength="1"/>
      <line x1="975" y1="640" x2="1082" y2="644" pathLength="1" class="nf"/>
      <line x1="1000" y1="520" x2="1070" y2="524" pathLength="1" class="nf"/>
      <line x1="996" y1="570" x2="1066" y2="574" pathLength="1" class="nf"/>
      <path d="M945 410 L1300 422 L1302 472 L1112 474 L1098 462 L990 460 L962 442 Z" pathLength="1"/>
      <path d="M1106 472 Q1118 506 1176 502 L1196 474" pathLength="1" class="nf"/>
      <path d="M1150 474 Q1146 488 1156 494" pathLength="1" class="nf"/>
      <path d="M1190 462 L1260 462 L1308 548 L1262 580 L1226 520 Z" pathLength="1"/>
      <path d="M680 322 L940 318 L940 414 L702 418 L680 402 Z" pathLength="1"/>
      <rect x="782" y="362" width="18" height="20" rx="4" pathLength="1"/>
      <rect x="812" y="362" width="18" height="20" rx="4" pathLength="1"/>
      <rect x="842" y="362" width="18" height="20" rx="4" pathLength="1"/>
      <rect x="872" y="362" width="18" height="20" rx="4" pathLength="1"/>
      <rect x="902" y="362" width="18" height="20" rx="4" pathLength="1"/>
      <path d="M938 316 L1300 322 Q1336 326 1346 352 L1356 422 L1300 426 L938 414 Z" pathLength="1"/>
      <rect x="960" y="330" width="170" height="16" rx="8" pathLength="1"/>
      <line x1="1160" y1="380" x2="1260" y2="383" pathLength="1" class="nf"/>
      <rect x="690" y="302" width="606" height="14" pathLength="1"/>
      <path d="M710 302 v14 M740 302 v14 M770 302 v14 M800 302 v14 M830 302 v14 M860 302 v14 M890 302 v14 M920 302 v14 M950 302 v14 M980 302 v14 M1010 302 v14 M1040 302 v14 M1070 302 v14 M1100 302 v14 M1130 302 v14 M1160 302 v14 M1190 302 v14 M1220 302 v14 M1250 302 v14 M1280 302 v14" pathLength="1" class="nf"/>
      <rect x="1020" y="290" width="60" height="14" pathLength="1"/>
      <rect x="994" y="262" width="114" height="30" rx="8" pathLength="1"/>
      <circle cx="1018" cy="277" r="7" pathLength="1"/>
      <rect x="1134" y="280" width="78" height="22" rx="3" pathLength="1"/>
      <path d="M1140 280 L1146 238 L1200 242 L1208 280 Z" pathLength="1"/>
      <rect x="1156" y="252" width="40" height="20" rx="4" pathLength="1"/>
      <line x1="1150" y1="238" x2="1150" y2="226" pathLength="1" class="nf"/>
    </g>`,
  // Traced from the Gunsmith screenshot (muzzle left, like the others).
  "m700": `<g class="scaled" style="--k:0.417" transform="translate(20 52) scale(0.417) translate(-362 -280)">
      <rect x="1740" y="408" width="60" height="168" rx="18" pathLength="1"/>
      <path fill-rule="evenodd" d="M1520 455 L1745 450 L1748 560 L1720 566 L1700 545 L1560 540 L1520 500 Z M1572 472 L1700 468 L1704 528 L1584 528 Z" pathLength="1"/>
      <path d="M1535 412 L1745 410 L1748 448 L1560 451 Z" pathLength="1"/>
      <path class="nf" d="M1620 528 V540 M1650 528 V542" pathLength="1"/>
      <path d="M1075 440 L1370 432 L1540 430 L1545 500 L1512 505 L1440 470 L1262 480 L1200 492 L1150 470 L1080 462 Z" pathLength="1"/>
      <circle cx="1450" cy="462" r="9" pathLength="1"/>
      <circle cx="1502" cy="465" r="11" pathLength="1"/>
      <path class="nf" d="M1282 488 Q1286 542 1332 546 L1382 540 L1396 500 M1310 500 Q1320 515 1312 530" pathLength="1"/>
      <path d="M1396 498 L1462 494 Q1468 570 1496 634 Q1494 646 1480 648 L1426 650 Q1414 648 1416 632 Q1424 600 1412 572 Q1400 540 1396 498 Z" pathLength="1"/>
      <path class="nf" d="M1420 560 Q1432 566 1428 580 M1424 596 Q1436 602 1430 616" pathLength="1"/>
      <rect x="1205" y="482" width="56" height="16" rx="3" pathLength="1"/>
      <rect x="1070" y="392" width="292" height="42" rx="10" pathLength="1"/>
      <circle cx="1352" cy="413" r="9" pathLength="1"/>
      <path d="M612 390 L1065 390 L1082 420 L1076 462 L748 462 L742 452 L612 442 Z" pathLength="1"/>
      <rect x="648" y="410" width="44" height="13" rx="6" pathLength="1"/>
      <rect x="708" y="410" width="44" height="13" rx="6" pathLength="1"/>
      <rect x="776" y="410" width="58" height="13" rx="6" pathLength="1"/>
      <rect x="852" y="410" width="58" height="13" rx="6" pathLength="1"/>
      <rect x="928" y="410" width="44" height="13" rx="6" pathLength="1"/>
      <circle cx="992" cy="424" r="5" pathLength="1"/>
      <circle cx="1030" cy="424" r="11" pathLength="1"/>
      <rect x="690" y="452" width="22" height="14" pathLength="1"/>
      <path d="M836 462 L862 462 L858 508 L842 511 Z" pathLength="1"/>
      <rect x="362" y="399" width="254" height="32" rx="7" pathLength="1"/>
      <path class="nf" d="M390 400 V430" pathLength="1"/>
      <rect x="618" y="377" width="440" height="13" pathLength="1"/>
      <path class="nf" d="M640 377v12 M664 377v12 M688 377v12 M712 377v12 M736 377v12 M760 377v12 M784 377v12 M808 377v12 M832 377v12 M856 377v12 M880 377v12 M904 377v12 M928 377v12 M952 377v12 M976 377v12 M1000 377v12 M1024 377v12 M1048 377v12" pathLength="1"/>
      <rect x="1096" y="374" width="196" height="16" pathLength="1"/>
      <rect x="1128" y="336" width="22" height="40" pathLength="1"/>
      <rect x="1232" y="336" width="22" height="40" pathLength="1"/>
      <rect x="1016" y="308" width="258" height="30" rx="8" pathLength="1"/>
      <rect x="928" y="296" width="90" height="70" rx="12" pathLength="1"/>
      <path class="nf" d="M948 298 V364" pathLength="1"/>
      <rect x="1270" y="302" width="120" height="56" rx="12" pathLength="1"/>
      <path class="nf" d="M1294 304 V356" pathLength="1"/>
      <rect x="1166" y="284" width="44" height="68" rx="8" pathLength="1"/>
      <circle cx="1188" cy="330" r="8" pathLength="1"/>
    </g>`,
  // Traced from the Gunsmith screenshot (muzzle left, like the others).
  "sr-25": `<g class="scaled" style="--k:0.392" transform="translate(20 58) scale(0.392) translate(-282 -272)">
      <rect x="1665" y="382" width="148" height="58" rx="18" pathLength="1"/>
      <path class="nf" d="M1700 384 V438" pathLength="1"/>
      <rect x="1556" y="396" width="112" height="36" rx="4" pathLength="1"/>
      <rect x="1258" y="470" width="76" height="76" rx="3" pathLength="1"/>
      <path class="nf" d="M1262 500 H1330 M1262 520 H1330" pathLength="1"/>
      <path d="M1440 478 L1500 478 L1560 574 Q1550 600 1520 608 L1494 612 Q1476 606 1480 590 Z" pathLength="1"/>
      <path class="nf" d="M1492 560 Q1506 566 1502 580" pathLength="1"/>
      <path d="M1250 440 L1545 440 L1540 470 L1500 478 L1460 510 L1340 512 L1334 480 L1250 470 Z" pathLength="1"/>
      <path class="nf" d="M1368 512 Q1400 520 1442 506 M1404 488 Q1414 500 1406 512" pathLength="1"/>
      <rect x="1245" y="368" width="318" height="72" rx="4" pathLength="1"/>
      <circle cx="1522" cy="408" r="10" pathLength="1"/>
      <path class="nf" d="M1300 392 H1440" pathLength="1"/>
      <path d="M785 376 L1245 376 L1245 440 L842 440 L836 430 L785 426 Z" pathLength="1"/>
      <rect x="865" y="386" width="36" height="10" rx="5" pathLength="1"/>
      <rect x="922" y="386" width="40" height="10" rx="5" pathLength="1"/>
      <rect x="980" y="386" width="40" height="10" rx="5" pathLength="1"/>
      <rect x="1036" y="386" width="40" height="10" rx="5" pathLength="1"/>
      <rect x="1092" y="386" width="40" height="10" rx="5" pathLength="1"/>
      <rect x="1150" y="386" width="40" height="10" rx="5" pathLength="1"/>
      <path class="nf" d="M842 424 H1240" pathLength="1"/>
      <rect x="1172" y="440" width="30" height="112" rx="9" pathLength="1"/>
      <path class="nf" d="M1176 470 H1198 M1176 492 H1198 M1176 514 H1198" pathLength="1"/>
      <rect x="452" y="394" width="295" height="18" rx="3" pathLength="1"/>
      <rect x="744" y="389" width="44" height="30" rx="3" pathLength="1"/>
      <rect x="282" y="382" width="172" height="40" rx="12" pathLength="1"/>
      <path class="nf" d="M420 384 V420 M434 384 V420" pathLength="1"/>
      <rect x="785" y="366" width="775" height="10" pathLength="1"/>
      <path class="nf" d="M800 366v10 M826 366v10 M852 366v10 M878 366v10 M904 366v10 M930 366v10 M956 366v10 M982 366v10 M1008 366v10 M1034 366v10 M1060 366v10 M1086 366v10 M1112 366v10 M1138 366v10 M1164 366v10 M1190 366v10 M1216 366v10 M1242 366v10 M1268 366v10 M1294 366v10 M1320 366v10 M1346 366v10 M1372 366v10 M1398 366v10 M1424 366v10 M1450 366v10 M1476 366v10 M1502 366v10 M1528 366v10 M1554 366v10" pathLength="1"/>
      <path d="M882 366 L890 350 L948 350 L956 366 Z" pathLength="1"/>
      <rect x="1282" y="352" width="190" height="14" pathLength="1"/>
      <rect x="1302" y="330" width="22" height="24" pathLength="1"/>
      <rect x="1418" y="330" width="22" height="24" pathLength="1"/>
      <rect x="1206" y="304" width="272" height="32" rx="8" pathLength="1"/>
      <rect x="1115" y="284" width="96" height="72" rx="14" pathLength="1"/>
      <path class="nf" d="M1138 286 V354" pathLength="1"/>
      <rect x="1470" y="290" width="92" height="62" rx="14" pathLength="1"/>
      <path class="nf" d="M1494 292 V350" pathLength="1"/>
      <rect x="1348" y="276" width="48" height="80" rx="10" pathLength="1"/>
      <circle cx="1372" cy="320" r="14" pathLength="1"/>
    </g>`,
  // Traced from the Gunsmith screenshot (muzzle left, like the others).
  "sks": `<g class="scaled" style="--k:0.38" transform="translate(20 52) scale(0.38) translate(-255 -200)">
      <path d="M1690 382 L1700 342 L1770 374 L1800 348 L1834 348 L1834 498 L1800 498 L1742 456 L1696 440 Z" pathLength="1"/>
      <circle cx="1790" cy="396" r="9" pathLength="1"/>
      <path class="nf" d="M1814 350 V496" pathLength="1"/>
      <rect x="1455" y="342" width="245" height="40" rx="4" pathLength="1"/>
      <path d="M1335 395 L1400 392 L1440 505 Q1440 530 1415 535 L1390 538 Q1374 530 1378 510 Z" pathLength="1"/>
      <path class="nf" d="M1384 470 Q1398 476 1394 490 M1388 500 Q1402 506 1396 520" pathLength="1"/>
      <path class="nf" d="M1210 405 L1216 436 L1300 438 L1310 405 M1250 410 Q1262 422 1252 434" pathLength="1"/>
      <path d="M1092 395 L1200 400 Q1170 520 1048 606 L1000 546 Q1080 482 1092 395 Z" pathLength="1"/>
      <path class="nf" d="M1100 440 L1180 446 M1080 490 L1160 500 M1050 535 L1124 552" pathLength="1"/>
      <path d="M1000 294 L1440 300 Q1460 320 1460 380 L1205 405 L1100 400 L1005 385 Z" pathLength="1"/>
      <circle cx="1435" cy="360" r="15" pathLength="1"/>
      <path class="nf" d="M1012 352 Q1200 362 1400 336" pathLength="1"/>
      <path fill-rule="evenodd" d="M845 396 H1040 V412 H1012 L1002 500 Q996 516 978 516 H950 Q934 514 924 496 L888 424 H848 Z M904 424 H990 L984 478 Q980 490 968 490 H952 Q942 488 936 478 Z" pathLength="1"/>
      <path d="M708 332 L745 298 L1000 294 L1005 385 L860 388 L845 395 L770 358 L708 352 Z" pathLength="1"/>
      <path class="nf" d="M850 298 V388" pathLength="1"/>
      <rect x="780" y="322" width="60" height="30" rx="4" pathLength="1"/>
      <rect x="545" y="300" width="175" height="12" pathLength="1"/>
      <rect x="418" y="320" width="295" height="16" rx="3" pathLength="1"/>
      <rect x="470" y="314" width="30" height="28" rx="3" pathLength="1"/>
      <path d="M515 288 L540 288 L536 368 L520 368 Z" pathLength="1"/>
      <rect x="255" y="310" width="165" height="38" rx="12" pathLength="1"/>
      <path class="nf" d="M394 312 V346 M408 312 V346" pathLength="1"/>
      <rect x="840" y="284" width="145" height="10" pathLength="1"/>
      <rect x="985" y="288" width="115" height="8" pathLength="1"/>
      <rect x="1210" y="285" width="170" height="12" pathLength="1"/>
      <rect x="1225" y="258" width="20" height="30" pathLength="1"/>
      <rect x="1350" y="258" width="20" height="30" pathLength="1"/>
      <rect x="1138" y="230" width="264" height="30" rx="8" pathLength="1"/>
      <rect x="1078" y="210" width="64" height="76" rx="12" pathLength="1"/>
      <path class="nf" d="M1096 212 V284" pathLength="1"/>
      <rect x="1400" y="222" width="102" height="50" rx="12" pathLength="1"/>
      <path class="nf" d="M1422 224 V270" pathLength="1"/>
      <rect x="1298" y="200" width="44" height="70" rx="8" pathLength="1"/>
      <circle cx="1320" cy="245" r="12" pathLength="1"/>
    </g>`,
  // Traced from the Gunsmith screenshot (muzzle left, like the others).
  "sks-budget": `<g class="scaled" style="--k:0.396" transform="translate(20 62) scale(0.396) translate(-270 -250)">
      <path fill-rule="evenodd" d="M1510 366 L1560 366 Q1580 380 1610 380 L1770 384 L1785 396 L1785 520 L1758 524 L1746 432 L1640 424 L1520 410 Z M1586 398 L1730 402 L1734 416 L1606 410 Z" pathLength="1"/>
      <path class="nf" d="M1700 384 V424 M1660 382 V424" pathLength="1"/>
      <rect x="1478" y="364" width="32" height="46" rx="4" pathLength="1"/>
      <path d="M1372 438 L1430 432 L1458 560 Q1450 578 1430 580 L1406 580 Q1394 572 1400 555 Z" pathLength="1"/>
      <path class="nf" d="M1225 448 L1235 462 L1310 466 L1320 445 M1265 440 Q1276 452 1268 464" pathLength="1"/>
      <path d="M1082 426 L1180 428 L1150 572 Q1110 580 1062 550 Z" pathLength="1"/>
      <path class="nf" d="M1092 470 L1166 474 M1084 510 L1158 516" pathLength="1"/>
      <path d="M1000 320 L1460 322 Q1480 345 1478 410 L1230 446 L1100 430 L1000 405 Z" pathLength="1"/>
      <circle cx="1452" cy="390" r="18" pathLength="1"/>
      <path class="nf" d="M1010 360 Q1250 376 1420 352" pathLength="1"/>
      <path d="M898 408 L1000 408 L996 420 L970 422 L966 476 Q962 490 954 482 L948 424 L904 422 Z" pathLength="1"/>
      <path d="M830 324 L1000 320 L1000 405 L830 408 Z" pathLength="1"/>
      <path class="nf" d="M836 394 H996" pathLength="1"/>
      <path d="M692 352 L730 326 L830 324 L832 408 L720 400 L692 378 Z" pathLength="1"/>
      <circle cx="742" cy="368" r="10" pathLength="1"/>
      <circle cx="774" cy="368" r="10" pathLength="1"/>
      <rect x="520" y="334" width="172" height="12" pathLength="1"/>
      <rect x="388" y="350" width="305" height="18" rx="3" pathLength="1"/>
      <rect x="445" y="342" width="40" height="34" rx="4" pathLength="1"/>
      <path d="M492 310 L518 310 L514 398 L496 398 Z" pathLength="1"/>
      <rect x="270" y="344" width="120" height="28" rx="5" pathLength="1"/>
      <path class="nf" d="M296 348 V368 M322 348 V368 M348 348 V368" pathLength="1"/>
      <rect x="810" y="314" width="170" height="10" pathLength="1"/>
      <rect x="1035" y="312" width="60" height="7" pathLength="1"/>
      <rect x="1230" y="314" width="100" height="10" pathLength="1"/>
      <rect x="1282" y="290" width="62" height="24" rx="3" pathLength="1"/>
      <path d="M1290 290 L1294 256 L1306 254 L1312 290 Z" pathLength="1"/>
    </g>`,
  // Traced from the Gunsmith screenshot (muzzle left, like the others).
  "rm277": `<g class="scaled" style="--k:0.45" transform="translate(31 46) scale(0.45) translate(-330 -250)">
      <rect x="1570" y="352" width="46" height="196" rx="10" pathLength="1"/>
      <path class="nf" d="M1584 380 L1604 396 L1584 412 M1584 440 L1604 456 L1584 472 M1584 500 L1604 516 L1584 532" pathLength="1"/>
      <rect x="1292" y="458" width="118" height="168" rx="3" pathLength="1"/>
      <rect x="1300" y="574" width="102" height="56" rx="4" pathLength="1"/>
      <path d="M1332 630 H1370 L1366 656 H1336 Z" pathLength="1"/>
      <path d="M1142 480 L1215 470 L1240 590 Q1232 605 1205 606 L1185 606 Q1170 600 1175 585 Z" pathLength="1"/>
      <path class="nf" d="M1182 540 Q1196 546 1192 560 M1186 568 Q1200 574 1194 588" pathLength="1"/>
      <path class="nf" d="M1036 446 Q1040 512 1084 514 L1122 514 Q1138 502 1140 470 M1078 456 Q1092 470 1080 486" pathLength="1"/>
      <path fill-rule="evenodd" d="M590 356 L610 342 L1220 342 L1280 352 L1570 352 L1570 546 L1530 546 L1500 520 L1410 520 L1410 460 L1290 460 L1240 470 L1180 450 L1030 436 L640 440 L600 425 Z M1452 456 L1546 456 L1546 506 L1518 506 Z" pathLength="1"/>
      <rect x="1280" y="350" width="282" height="28" rx="8" pathLength="1"/>
      <rect x="630" y="383" width="95" height="28" rx="4" pathLength="1"/>
      <rect x="772" y="383" width="140" height="28" rx="4" pathLength="1"/>
      <rect x="625" y="358" width="28" height="10" rx="4" pathLength="1"/>
      <rect x="668" y="358" width="28" height="10" rx="4" pathLength="1"/>
      <path class="nf" d="M720 356 H1065" pathLength="1"/>
      <circle cx="940" cy="398" r="10" pathLength="1"/>
      <rect x="1072" y="380" width="14" height="34" rx="7" pathLength="1"/>
      <rect x="1098" y="380" width="14" height="34" rx="7" pathLength="1"/>
      <rect x="1124" y="380" width="14" height="34" rx="7" pathLength="1"/>
      <rect x="1320" y="398" width="130" height="24" rx="2" pathLength="1"/>
      <path d="M780 436 L940 436 L946 470 L932 524 Q918 498 870 474 L796 470 Q776 460 780 436 Z" pathLength="1"/>
      <rect x="498" y="392" width="95" height="16" rx="2" pathLength="1"/>
      <path class="nf" d="M520 392 V408 M540 392 V408 M560 392 V408" pathLength="1"/>
      <rect x="330" y="381" width="170" height="38" rx="12" pathLength="1"/>
      <path class="nf" d="M470 383 V417" pathLength="1"/>
      <rect x="625" y="330" width="50" height="12" rx="2" pathLength="1"/>
      <rect x="935" y="322" width="165" height="12" pathLength="1"/>
      <path class="nf" d="M945 322v12 M961 322v12 M977 322v12 M993 322v12 M1009 322v12 M1025 322v12 M1041 322v12 M1057 322v12 M1073 322v12 M1089 322v12" pathLength="1"/>
      <rect x="1040" y="300" width="75" height="22" rx="3" pathLength="1"/>
      <path d="M1052 300 L1056 256 L1072 252 L1076 300 Z" pathLength="1"/>
    </g>`,
  // Traced from the Gunsmith screenshot (muzzle left, like the others).
  "mk4": `<g class="scaled" style="--k:0.384" transform="translate(91 44) scale(0.384) translate(-500 -240)">
      <path fill-rule="evenodd" d="M1390 362 L1680 365 L1690 380 L1690 548 L1640 565 L1580 540 L1500 530 L1446 490 L1440 400 L1396 398 Z M1490 416 L1640 418 L1638 506 L1520 490 Z" pathLength="1"/>
      <rect x="1308" y="362" width="90" height="34" rx="3" pathLength="1"/>
      <path d="M1045 455 L1132 455 L1110 640 L1066 736 L1014 728 L1036 640 Z" pathLength="1"/>
      <path class="nf" d="M1040 640 H1110 M1056 520 H1122 M1052 580 H1116" pathLength="1"/>
      <path fill-rule="evenodd" d="M1245 455 L1300 445 L1350 596 Q1345 618 1320 625 L1300 625 Q1285 610 1288 595 Z M1292 502 L1302 492 L1326 570 L1310 580 Z" pathLength="1"/>
      <path class="nf" d="M1140 470 Q1150 506 1200 506 L1242 500 M1176 466 Q1188 480 1180 494" pathLength="1"/>
      <path d="M1030 410 L1300 410 L1296 440 L1240 448 L1200 496 L1140 498 L1134 470 L1110 470 L1096 455 L1036 455 Z" pathLength="1"/>
      <rect x="1020" y="346" width="290" height="66" rx="4" pathLength="1"/>
      <circle cx="1288" cy="380" r="9" pathLength="1"/>
      <path class="nf" d="M1170 372 L1182 384 M1194 372 L1206 384 M1218 372 L1230 384" pathLength="1"/>
      <path d="M600 352 L620 342 L1022 345 L1022 420 L640 420 L605 396 Z" pathLength="1"/>
      <rect x="745" y="356" width="40" height="10" rx="5" pathLength="1"/>
      <rect x="800" y="356" width="40" height="10" rx="5" pathLength="1"/>
      <rect x="855" y="356" width="40" height="10" rx="5" pathLength="1"/>
      <rect x="910" y="356" width="40" height="10" rx="5" pathLength="1"/>
      <rect x="810" y="376" width="156" height="18" rx="4" pathLength="1"/>
      <circle cx="984" cy="406" r="5" pathLength="1"/>
      <circle cx="1004" cy="406" r="5" pathLength="1"/>
      <path fill-rule="evenodd" d="M712 422 L968 422 L966 440 L925 440 L920 530 Q915 552 895 554 L860 554 Q835 550 820 525 L790 445 L715 440 Z M830 448 L900 448 L895 520 Q890 532 878 532 L866 532 Q854 530 848 518 Z" pathLength="1"/>
      <rect x="548" y="368" width="172" height="32" rx="10" pathLength="1"/>
      <path class="nf" d="M576 370 V398 M690 370 V398" pathLength="1"/>
      <rect x="500" y="366" width="52" height="34" rx="4" pathLength="1"/>
      <path class="nf" d="M515 370 V396 M530 370 V396" pathLength="1"/>
      <rect x="620" y="333" width="690" height="10" pathLength="1"/>
      <path class="nf" d="M634 333v10 M656 333v10 M678 333v10 M700 333v10 M722 333v10 M744 333v10 M766 333v10 M788 333v10 M810 333v10 M832 333v10 M854 333v10 M876 333v10 M898 333v10 M920 333v10 M942 333v10 M964 333v10 M986 333v10 M1008 333v10 M1030 333v10 M1052 333v10 M1074 333v10 M1096 333v10 M1118 333v10 M1140 333v10 M1162 333v10 M1184 333v10 M1206 333v10 M1228 333v10 M1250 333v10 M1272 333v10 M1294 333v10" pathLength="1"/>
      <rect x="1020" y="324" width="220" height="10" pathLength="1"/>
      <rect x="1030" y="306" width="22" height="20" pathLength="1"/>
      <rect x="1180" y="306" width="22" height="20" pathLength="1"/>
      <rect x="1010" y="256" width="140" height="54" rx="14" pathLength="1"/>
      <path class="nf" d="M1034 258 V308" pathLength="1"/>
      <rect x="1140" y="252" width="155" height="66" rx="16" pathLength="1"/>
      <rect x="1148" y="240" width="22" height="14" rx="3" pathLength="1"/>
      <circle cx="1196" cy="288" r="20" pathLength="1"/>
      <path class="nf" d="M1270 254 V316" pathLength="1"/>
    </g>`
};
