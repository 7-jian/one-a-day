##### 安装
```
Mac: https://res001.geekbang.org/tools/jdk-11.0.2_osx-x64_bin.dmg

IntelliJ官方地址: https://www.jetbrains.com/idea/

windows需配环境变量

你可以考虑下载Zulu提供的OpenJDK
https://www.azul.com/downloads/zulu-community/?&version=java-11-lts&os=&os=windows&architecture=x86-64-bit&package=jdk

也可以费点事儿，下载Oracle的JDK

https://www.oracle.com/technetwork/java/javase/downloads/index.html

JDK11就好，JDK13只是比JDK11新增了几个功能，并不是全新的东西。其实JDK8也够用。只有在后面interface里面的方法略有不同，JDK8不允许interface有private的方法(其实我觉得也没啥用)

```
```java
// java
// java -version
// javac -version
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
// javac HelloWorld.java 生成 HelloWorld.class(给Java执行使用)
// java HelloWorld 执行
```