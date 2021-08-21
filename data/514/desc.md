Cho danh sách ~N~ lập trình viên đánh số lần lượt từ ~1~ đến ~N~. Mỗi người đều tham gia cả hai giải thi đấu: Giải THPT và giải Mở rộng. Với mỗi lập trình viên, bạn sẽ được cung cấp điểm số của giải Mở rộng ~e_i~ và điểm số của giải THPT ~s_i~. Lập trình viên ~i~ được coi là giỏi hơn lập trình viên ~j~ khi và chỉ khi cả hai điểm số của lập trình viên ~i~ đều lớn hơn hoặc bằng điểm số tương ứng của lập trình viên ~j~, trong đó có ít nhất một điểm số phải lớn hơn. Hãy tính xem với mỗi lập trình viên ~i~ thì có bao nhiêu lập trình viên mà ~i~ giỏi hơn.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~N~;
- ~N~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên ~e_i~ và ~s_i~ là các điểm số của lập trình viên ~i~ được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Ghi trên một dòng ~N~ số nguyên không âm, hai số liên tiếp cách nhau một dấu cách, số thứ ~i~ là số lập trình viên mà ~i~ giỏi hơn.

## Ví dụ:
#### Dữ liệu vào:
```
8
1798 1832
862 700
1075 1089
1568 1557
2575 1984
1033 950
1656 1649
1014 1473
```

#### Dữ liệu ra:
```
6 0 2 4 7 1 5 1
```

## Giới hạn:
- ~1 ≤ n ≤ 3×10^5; 1 ≤ e_i, s_i ≤ 10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)