<?php
$fn = $_GET['cb'];//��ȡ�������ص�����������
$arr = array('zhangsan','lisi','wangwu');
echo $fn.'('.json_encode($arr).');';//callback(['zhangsan','lisi','wangwu']);

