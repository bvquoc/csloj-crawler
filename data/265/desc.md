Cho dãy số nguyên gồm ~n~ phần tử ~a_1,a_2,…,a_n~.

Dãy con của một dãy số là dãy mới được tạo thành sau khi bỏ đi một vài phần tử của dãy ban đầu (hoặc không bỏ phần tử nào). Ví dụ dãy ~[3,2,5]~ là dãy con của day ~[3,5,2,9,5]~. Dãy rỗng (không gồm phần tử nào) là dãy con của mọi dãy số, dãy rỗng thì có tổng là ~0~.

**Yêu cầu:** Cho ~q~ truy vấn, mỗi truy vấn gồm một cặp số ~(L;R)\ (1≤L≤R≤N)~. Với mỗi truy vấn, bạn hãy tìm dãy con của dãy ~[a_L,a_(L+1),…,a_R]~ có tổng nhỏ nhất, in ra tổng đó.

## Dữ liệu vào:
- Dòng đầu chứa hai số ~n,q\ (1≤n,q≤10^5)~;
- Dòng tiếp theo gồm ~n~ số nguyên ~a_i\ (|a_i|≤10^5)~;
- ~q~ dòng tiếp theo, mỗi dòng là một cặp số nguyên dương ~L,R~.

## Dữ liệu ra:
- Ghi trên ~q~ dòng, dòng thứ ~i~ là đáp án truy vấn ~i~.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
-1 2 -3 4 -5
2 5
3 3
```

#### Dữ liệu ra:
```
-8
-3
```

## Giới hạn:
- Subtask ~\#1: 80\%~ số điểm có ~n≤10^3;q=1;L=1;R=n~;
- Subtask ~\#2: 20\%~ số điểm còn lại không có ràng buộc bổ sung.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)