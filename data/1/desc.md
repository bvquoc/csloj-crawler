Cho hai số nguyên ~A~ và ~B~. Tính và in ra kết quả biểu thức ~A+B~.

## Dữ liệu vào:
- Một dòng duy nhất chứa hai số nguyên ~A, B~ được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là kết quả của phép tính ~A+B~.

## Ví dụ:
#### Dữ liệu vào:
```plain
2 3
```

#### Dữ liệu ra:
```plain
5
```

## Giới hạn:
- ~100\%~ số test có ~|A|, |B| \le 10^9~

## Code mẫu:
Bạn phải **nhập/xuất** đúng theo đề bài yêu cầu. Không "**thông báo**" khi nhập/xuất.
#### C++, C++11, C++14, C++17
```C++
#include <iostream>
using namespace std;
int main() {
    int A, B;
    cin >> A >> B;
    cout << A + B;
    return 0;
}
```

#### C
```C
#include <stdio.h>
int main() {
    int A, B;
    scanf("%d %d\n", &A, &B);
    printf("%d\n", B + A);
    return 0;
}
```

#### Pascal
```Pascal
program plus;
var a, b: longint;
begin
    readln(a, b);
    writeln(a + b);
end.
```

#### CSharp
```C#
using System;
using System.IO;
namespace mycsharp{
	class aplusb{
		static void Main(){
			string[] s=Console.ReadLine().Split(' ');
			int a=Convert.ToInt32(s[0]);
			int b=Convert.ToInt32(s[1]);
			Console.Write((a + b).ToString());
		}
	}
}
```

#### Python3
```python
a, b = map(int, input().split())
print(a + b)
```

#### Python2
```python
a, b = map(int, raw_input().split())
print a + b
```

#### Java
```java
import java.util.*;
public class APlusB {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
		int a = in.nextInt();
        int b = in.nextInt();
        System.out.println(a + b);
    }
}
```

#### Scala
```scala
import scala.io.StdIn
object aplusb extends App {
	val Array(a, b) = StdIn.readLine().split(" ")
    println(a.toInt + b.toInt)
}
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)