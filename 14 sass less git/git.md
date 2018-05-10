# ���п�ܵڶ��죺Git��Angular����

## ��ϰ

- Node Node.js --- ����һ������ϵͳ
  + һ��JS�����л���
  + ��Ҫ���ڿ���WebӦ�ó��򣨻����½�����ӣ�
  + �ܶ��ǰ�˿������߶��ǻ���node���ƽ̨
  + ���õĹ��߾��൱��һЩ���

- NVM ����ѡ�ģ�
  + Node Version Manager(Node�İ汾������)
  + ��Ϊnode�İ汾�Ƚ϶࣬�ܶ�ʱ�����ǿ�����������汾����Ҫ�������л�
  + ʹ��
    * nvm use [��Ӧ�İ汾��] [ƽ̨�ܹ��������32ϵͳ��Ҫд32,64λ���ùܣ�]
    * nvm install <version> [arch]  ��װ
    * nvm uninstall <version> ж��
    * nvm list �鿴�Ѿ���װ�汾
  + ����
    * https://github.com/coreybutler/nvm-windows

- NPM 
  + node package manager(node�İ�������)
  + npm������ǳ����㣬����ֻ��Ҫ��סʹ���ĸ����Ϳ�����
  + ʹ��
    - npm install xxx 
    - ��װһ��������Ŀ���أ�����Ҫ����
    - ��װ��ɹ�����Ŀ��Ŀ¼�»��һ��node_modules�ļ��У����е����������İ�ȫ��������
    
    - ������Ҫ��¼��Ŀ������Щ������������Ҫһ�������ļ���package.json��������ͨ��npm init��������
    - �Ժ�װ����ʱ����--save
    
    - --save���ǽ����ǰ�װ�İ����ֺͰ��汾��¼�������ļ��е�dependencies�ڵ���
    - --save-dev
    - ��Ŀ���������֣�һ��������ͨ����Ŀ��������bootstrap������һ��ֻ�ǿ����׶���Ҫ�õģ��������ڿ�����������gulp�������������ռ�¼��devDependencies�ڵ�����

    - npm uninstall xxx --save

    - npm install xxx -g(ȫ�ְ�װ��)
      + ����㰲װ����һ�����ߣ�����Ҫ��ÿһ���ط������ã����������һ��ȫ�ְ�װ��
    
- Bower
  + Web sites are made of lots of things �� frameworks, libraries, assets, and utilities. Bower manages all these things for you.
  + Bower��������������Ŀ�����е���������Ҫ����Webҳ�濪��ʱʹ�õİ���������jquery��bootstrap
  + 
  > �ظ�������̫�࣬ץס����������֮��Ĺ���
  > 

- Gulp  FIS3
- http://www.ydcss.com/archives/94

- msi - microsoft installer ΢��װ��

## GIT

### ʲô��GIT

- ��һ��Դ���������
- ��һ����Ŀ�У������ɿ�����Ա��д�Ķ�����Դ����
- Դ�����б�Ҫ����������
- ��Դ������Ա�׷�ݣ���Ҫ��¼ÿ�α����ʲô��˭������α仯
- ��Ϊ��ά���Ƚ��鷳��
- GIT��Linux֮������Ϊ��ά������Linux��Դ����д��һ������
- Git ֮ǰ �ܶ�ʹ�� svn vss tfs hs ......


- https://guides.github.com/

### ��װGIT

- git�����й���
- ����git�����е�һ���ͻ���������ṩһ������ȥ����Դ���룩

### GIT�������

- ��ʼ��һ������GIT�ִ�

```shell
cd ��ǰ��ĿĿ¼
git init // ��ʼ��һ�����صĲֿ�
```

> �����ڱ����ļ����������һ��.git���ļ������ڼ�¼���е���Ŀ�����Ϣ

- �鿴���زִ��ı��״̬

git status
���ڲ鿴���زִ���״̬
��һ�β鿴����ʾ����һ��û�б����ٵ��ļ�

git status -s // -s �������Ҫ�ı����־

- ��ӱ����ݴ棨�йܣ��ļ�

git add
���Խ�һ��û�б����ٵ��ļ���ӵ������б�

������node_modules�������ʵ��ļ��ǲ�Ӧ�ñ�����

- ��ӱ���GIT�����嵥�ļ�

�ڴ�����ļ��еĸ�Ŀ¼���һ��.gitignore�ļ�
���ļ�����˵�����Ե��ļ�����Щ

- �ύ���йܵ��ļ��仯�����زִ�

git commit
�����صı仯�ύ�ı��صĲֿ��ļ��й鵵
һ��������һ��С��Ԫ������仯�����ύ

- �ԱȲ���

git diff
�������ڶԱȵ�ǰ״̬�Ͱ汾����״̬�ı仯

- �ύ��־

git log 
���Բ鿴�ύ��־

- �ع鵽ָ���汾

git reset --hard

- Ϊ�ִ����Զ�ˣ��������ˣ���ַ

- �����زִ����ύ��¼���͵�Զ�˵�master��֧

- ��ȡԶ��master��֧�ĸ��¼�¼������

- �ع鵽ָ���汾

### GITHUB����ʹ��

- https://github.com/
- GITHUB��һ��GIT������ṩ�̣�
- 
- ����罻�����

http://zoomzhao.github.io/code-guide/
https://github.com/jobbole/awesome-javascript-cn
https://github.com/jobbole/awesome-css-cn


- GIT��֧









## Angular����

### ���

- ֪ʶ����
- ʲô��Angular
  + ���ٹ���WebӦ�ó���
  + ��ҳ��Ӧ�ó���
- Angular������
- ΪʲôҪ��Angular
  + ��WebӦ�ó��򿪷����򵥣������
- ����ǰ�˽���MV*��ʱ��

### ��ʼʹ��
  
- ����Angular
  + ����
  + bower
  + npm
- ����ʹ��