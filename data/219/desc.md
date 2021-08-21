Cho ~n~ số nguyên dương ~a_i,i=1..n~, bạn phải đặt giữa ~n~ số nguyên dương này ~2~ phép nhân và ~n-3~ phép cộng sao cho kết quả biểu thức là lớn nhất.

**Ví dụ:** với ~n=5~ và dãy ~a_i~ là ~4, 7, 1, 5, 3~ thì bạn có thể có các biểu thức:
- ~4 + 7 \times 1 + 5 \times 3~;
- ~4 \times 7 \times 1 + 5 + 3~.

**Chú ý:** Không được thay đổi thứ tự xuất hiện của ~a_i,i=1..n~ trong biểu thức thu được.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n\ (4≤n≤1000)~;
- ~N~ dòng tiếp theo, dòng thứ ~i~ chứa số nguyên dương ~a_i\ (1≤a_i≤10000,i=1..n)~.

## Dữ liệu ra:
- Ghi ra một số nguyên dương duy nhất là giá trị lớn nhất của biểu thức thu được.

## Ví dụ:
#### Dữ liệu vào:
```
5
4
7
1
5
3
```

#### Dữ liệu ra:
```
44
```

#### Giải thích:
- Biểu thức thu được là: ~4 \times 7 + 1 + 5\times3~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)