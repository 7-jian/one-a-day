public class BooleanOprt {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;

        System.out.println(a && b);
        System.out.println(a & b ); // 建议用 &&
        System.out.println(a || b);
        System.out.println(a | b);

        // System.out.println(a || (10 / 0 > 1));  // 除0错误
        // System.out.println(a | (10 / 0 > 1)); // 建议用 ||
    }
}
