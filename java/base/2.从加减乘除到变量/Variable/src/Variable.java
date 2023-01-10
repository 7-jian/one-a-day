public class Variable {
    public static void main(String[] args) {
        // int: -2^31 ~ 2^31-1
        int a = 3;
        int b = 5;
        int c = 7;

        int x = 9;

        int y = a*x + b*x*x + c*x*x*x;

        System.out.println(y);
    }
}
