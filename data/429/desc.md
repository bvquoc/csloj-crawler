Đếm số cách lát hình chữ nhật ~3×n~ bằng các domino ~2×1~ (các viên domino lát phủ kín hình chữ nhật, không chờm ra ngoài, không chồng lên nhau).

Chẳng hạn với ~n = 12~ ta có nhiều cách lát, dưới đây là một trong số đó:
 <center><img src="/images/problems/429/LATGACH3.png" width=500px></center>

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~T~ là số bộ test;
- ~T~ dòng tiếp theo, mỗi dòng chứa một số nguyên dương ~n~.

## Dữ liệu ra:
- Với mỗi ~n~, in ra trên một dòng số cách lát tương ứng.

## Ví dụ:
#### Dữ liệu vào:
```
3
1
2
3
```

#### Dữ liệu ra:
```
0
3
0
```

#### Giải thích:
- Với ~n = 1~ hoặc ~n = 3~, không có cách nào lát được.
- Với ~n = 2~ ta có ~3~ cách lát như sau:
<center><img src="/images/problems/429/LATGACH3.svg" width=500px></center>
 
## Giới hạn:
- ~T ≤ 32; n ≤ 31~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)