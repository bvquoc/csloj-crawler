Cho dãy ~n~ số nguyên ~a_0,a_1,a_2,…,a_{n-1}~. Sau một lần xoay sang phải thì từ dãy ~[a_0,a_1,a_2,…,a_{n-1}]~ ta được dãy số mới là ~[a_{n-1},a_0,a_1,a_2,…,a_{n-2}]~.

Bé Hải Dương xoay dãy số sang phải ~k~ lần, sau đó hỏi Bé Hải Phong ~q~ câu hỏi: cho số nguyên ~m~, cho biết giá trị ~a_m~ trong dãy số mới (sau khi quay sang phải ~k~ lần).

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên ~n,k,q\ (1≤n≤10^5,1≤k≤10^5,1≤q≤500)~;
- Dòng tiếp theo là ~n~ số nguyên dương ~a_0,a_1,a_2,…,a_{n-1}\ (1≤a_i<10^5)~;
- ~q~ dòng tiếp theo, mỗi dòng chứa một số nguyên ~m\ (0≤m≤n-1)~.

## Dữ liệu ra:
- Ghi ra trên ~q~ dòng, dòng thứ ~i~ là đáp án câu hỏi ~i~.

## Ví dụ:
#### Dữ liệu vào:
```
3 2 3
1 2 3
0
1
2
```

#### Dữ liệu ra:
```
2
3
1
```

#### Giải thích:
- Dãy số ban đầu: ~[1,2,3]~;
- Xoay lần ~1~: ~[3, 2, 1]~;
- Xoay lần ~2~: ~[2,3,1]~;
- ~m=0,a[0]=2; m=1,a[1]=3; m=2,a[2]=1~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)