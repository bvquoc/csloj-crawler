Cho một số nguyên dương ~n~. Bạn hãy đếm số cách phân tích số ~n~ thành tổng hai số nguyên tố khác nhau ~u,v\ (u< v)~.

## Dữ liệu vào:
- Số nguyên dương ~n\ (2≤n≤3×10^5)~.

## Dữ liệu ra:
- Dòng đầu ghi một số nguyên ~k~ là số cách phân tích thỏa mãn điều kiện đề bài. Nếu không có cách phân tích ghi số ~0~.
- Trường hợp ~k>0, k~ dòng tiếp theo, dòng thứ ~i~ ghi hai số ~u_i,v_i\ (u_i< v_i)~ là cách phân tích thứ ~i~ theo yêu cầu: ~u_1< u_2<…< u_k~.

## Ví dụ:
#### Dữ liệu vào:
```
82
```

#### Dữ liệu ra:
```
4
3 79
11 71
23 59
29 53
```

**Giải thích:** Số ~82~ có ~4~ cách phân tích ~82=3+79=11+71=23+59=29+53~. Cách phân tích ~82=41+41~ không được tính vì ~u=v~.

#### Dữ liệu vào:
```
11
```

#### Dữ liệu ra:
```
0
```

**Giải thích:** Số ~11~ không phân tích được.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)