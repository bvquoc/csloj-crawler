**<center>Nguồn: Beginner Free Contest 12</center>**

Đất nước Kc97ble có ~n~ thành phố được nối bởi ~m~ tuyến đường hai chiều, tuyến đường thứ ~i~ nối liền hai thành phố ~u_i~ và ~v_i~. Chính phủ đất nước Kc97ble mong muốn xây dựng thư viện tại một số thành phố trong đất nước, sao cho từ bất kì một thành phố nào cũng đều có thể đi đến một thành phố có thư viện.

Biết rằng chi phí xây dựng thư viện ở thành phố ~i~ là ~a_i~. Hãy tính tổng chi phí xây dựng thư viện nhỏ nhất có thể.

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số nguyên ~n~ và ~m~ ~(1 ≤ n, m ≤ 10^5)~ - số thành phố và số tuyến đường;
- Dòng thứ hai gồm ~n~ số nguyên ~a_1, a_2, . . . , a_n~ ~(1 ≤ a_i ≤ 10^9)~ - với ~a_i~ là chi phí xây dựng thư viện ở thành phố ~i~;
- ~m~ dòng tiếp theo, dòng thứ ~i~ gồm hai số nguyên ~u_i~ và ~v_i~ ~(1 ≤ u_i, v_i ≤ n, u_i \le v_i)~ - mô tả tuyến đường thứ ~i~. Dữ liệu vào đảm bảo mỗi cặp thành phố được nối bởi nhiều nhất một tuyến đường.

## Dữ liệu ra:
- In ra tổng chi phí xây dựng thư viện nhỏ nhất có thể.

## Ví dụ:
#### Dữ liệu vào:
```
5 4
6 4 2 3 3
1 2
2 4
4 1
3 5
```

#### Dữ liệu ra:
```
5
```

## Giải thích
- Ở ví dụ trên, ta có thể xây dựng thư viện ở thành phố ~3~ và ~4~ với tổng chi phí ~2 + 3 = 5~. Khi đó:
    - Từ thành phố ~1, 2, 4~ có thể đi đến thành phố ~4~ (thành phố có thư viện)
    - Từ thành phố ~3, 5~ có thể đi đến thành phố ~3~ (thành phố có thư viện)
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)