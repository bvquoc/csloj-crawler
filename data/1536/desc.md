**<center>NGUỒN : VNU-OI 2020</center>**

Ta định nghĩa các hàm ~f(n)~ và ~g(n)~ với số nguyên dương ~n~ như sau: ~f(n) = 2n + 1, g(n) = 4n~.

Ta định nghĩa tập ~S~ như sau: ~x~ là phần tử của ~S~ khi:
- ~x = 1~;
- ~x = f(y)~ trong đó ~y~ là phần tử của ~S~;
- ~x = g(y)~ trong đó ~y~ là phần tử của ~S~.

**Ví dụ:** ~gfg(1) = gf(4) = g(9) = 36; ffgg(1) = ffg(4) = ff(16) = f(33) = 67~.

Khi đó, các số ~36~ và ~67~ sẽ nằm trong tập ~S~. Hãy trả lời các dạng câu hỏi sau đây:
- ~1\ k~ - hỏi xem số ~k~ có thuộc tập ~S~ không. In ra `NO` nếu không phải, Ngược lại, in ra tổ hợp ~f, g~ xuất phát từ ~1~, tạo ra số ~k~. **Ví dụ:** với ~k = 67~, in ra `ffgg`. Với ~k = 2~, in ra `NO`;
- ~2\ k~ - Đếm số phần tử ~x~ thuộc ~S~ sao cho ~2^k ≤ x < 2^{k+1}~;
- ~3\ k~ - Đếm số phần tử ~x~ thuộc ~S~ sao cho ~1 ≤ n < 2^{k+1}~.

## Dữ liệu vào:
- Dòng đầu chứa số truy vấn ~Q\ (Q ≤ 10^5)~. Sau đó là ~Q~ dòng, mỗi dòng là ~1~ truy vấn;
- Mỗi truy vấn có dạng ~t\ k\ (t ≤ 3)~;
Với ~t = 1, k < 10^{100}~. Trường hợp còn lại, ~k < 10^9~. Các test chỉ thuộc một loại truy vấn.

## Dữ liệu ra:
- Với truy vấn loại ~1~, in ra tổ hợp `f g` tương ứng hoặc `NO`;
- Với truy vấn loại ~2~ hoặc ~3~, in ra kết quả theo modulo ~10^9 + 7~.

## Ví dụ:
#### Dữ liệu vào:
```
3
1 20598
1 508048
2 2
```

#### Dữ liệu ra:
```
NO
ggfgfgggffff
2
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)