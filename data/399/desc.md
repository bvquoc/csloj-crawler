<center><img src="/images/problems/399/BBTSP.jpg" width=500px></center>
<br>

Hè đến rồi, mùa du lịch lại đến, gia đình bạn có kế hoạch đi du lịch ở đâu chưa? Còn gia đình Lan đang có kế hoạch đi du lịch thăm ~N~ thành phố, mỗi thành phố đúng một lần. Sau khi tham khảo các nhà cung cấp dịch vụ thì gia đinh Lan nhận được thông tin chi phí đi lại giữa hai thành phố bất kỳ, Lan đang băn khoăn không biết nên đi theo hành trình như thế nào để tiết kiệm nhất? Bạn hãy giúp gia đình Lan nhé.

Cho biết ~N~ là số thành phố (đánh số từ ~1~ đến ~N~) và mảng ~C~ gồm ~N×N~ số nguyên không âm với ~C_{ij}~ là chi phí đi từ thành phố ~i~ đến thành phố ~j~ (~C_{ij}~ có thể khác ~C_{ji}, C_{ii} = 0~ với mọi ~i~). Nhà Lan xuất phát từ thành phố ~1~. Hãy tìm một hành trình đi qua tất cả các thành phố, mỗi thành phố đúng một lần rồi quay về thành phố ~1~ với tổng chi phí thấp nhất.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên ~N~ là số thành phố;
- ~N~ dòng tiếp theo mô tả mảng ~C~: Dòng thứ ~i~ chứa ~N~ số nguyên ~C_{i1}, C_{i2}, …, C_{iN}~

## Dữ liệu ra:
- Dòng đầu ghi số nguyên không âm là chi phí nhỏ nhất;
- Dòng thứ hai liệt kê theo thứ tự các thành phố đi qua (~N + 1~ số dương, mỗi số cách nhau bởi một dấu cách).

## Ví dụ:
#### Dữ liệu vào:
```
4
0 20 35 42
20 0 34 30
35 34 0 12
42 30 12 0
```

#### Dữ liệu ra:
```
97
1 2 4 3 1
```

#### Giải thích:
- Hành trình ~1 \rightarrow 2 \rightarrow 4 \rightarrow 3 \rightarrow 1~ có tổng chi phí là ~20 + 30 + 12 + 35 = 97~ là chi phí thấp nhất. 

## Giới hạn:
- ~1 ≤ N ≤ 16, 0 ≤ C_{ij} ≤ 1000~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)