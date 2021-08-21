Xét dãy ngoặc là một xâu chỉ gồm các ký tự `(` và `)`. Ta định nghĩa dãy ngoặc đúng như sau:
- Xâu rỗng là một dãy ngoặc đúng.
- $X$ là một dãy ngoặc đúng khi và chỉ khi $X$ có một trong hai dạng: $(Y)$ hoặc $YZ$ trong đó $Y, Z$ là các dãy ngoặc đúng.

Cho số nguyên dương $N$, hãy liệt kê tất cả các dãy ngoặc đúng độ dài $2N$.

## Dữ liệu vào:
- Một dòng duy nhất chứa số nguyên dương $N$.

## Dữ liệu ra:
- Liệt kê tất cả các dãy ngoặc đúng độ dài $2N$ theo thứ tự từ điển tăng dần (theo nguyên tắc so sánh chuỗi, chú ý `(` < `)` ), mỗi dãy trên một dòng

## Ví dụ:
#### Dữ liệu vào:
```
2
```

#### Dữ liệu ra:
```
(())
()()
```

#### Giải thích:
- Với $N$ bằng $2$, chỉ có $2$ dãy ngoặc đúng độ dài $4$ theo thứ tự như trên.

## Giới hạn:
- $1 ≤ n ≤ 10$.