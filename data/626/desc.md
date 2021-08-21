**<center>Nguồn: Beginner Free Contest 6</center>**

Ta định nghĩa **chỉ số hài hòa** của dãy số nguyên ~A~ có ~N~ phần tử là độ dài của dãy con liên tiếp dài nhất ~[L, R]~ thỏa mãn tính chất sau: với mọi ~L < i ≤ R~ thì ~|A_{i−1} − A_i| = 1~. Dãy ~A~ được gọi là **hài hòa** khi chỉ số hài hòa lớn hơn ~50\%~ độ dài dãy. Hãy xác định xem một dãy số nguyên có hài hòa hay không.

## Dữ liệu vào:
Dòng đầu tiên chứa số nguyên dương ~T~ tương ứng với số lượng bộ test.
~T~ nhóm tiếp theo, mỗi nhóm gồm ~2~ dòng:
- Dòng đầu tiên chứa số nguyên dương ~N~ - độ dài mảng ~A~;
- Dòng thứ hai chứa ~N~ số nguyên tương ứng với giá trị của mảng ~A~.

## Dữ liệu ra:
- In ra ~T~ dòng, mỗi dòng in ra `Yes` hoặc `No` tương ứng với dãy ~A~ có hài hòa hay không.

## Ví dụ:
#### Dữ liệu vào:
```
2
6
1 2 1 1 3 5
5
1 2 3 4 4
```

## Dữ liệu ra:
```
No
Yes
```

#### Giải thích:
- Trong test ví dụ đầu tiên, dãy con dài nhất thỏa mãn tính chất là ~[1, 3]~, chỉ số hài hòa là ~3~ chưa lớn hơn ~50\%~ độ dài dãy. Vì vậy, dãy ~A~ không hài hòa, in ra `No`.
- Trong test ví dụ thứ hai, dãy con dài nhất thỏa mãn tính chất là ~[1, 4]~, chỉ số hài hòa là ~4~ lớn hơn ~50\%~ độ dài dãy. Vì vậy, dãy ~A~ là dãy hài hòa, in ra `Yes`.

## Giới hạn:
- ~T, N ≤ 1000; |A_i| ≤ 100~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)