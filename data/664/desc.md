**<center>Nguồn: Beginner Free Contest 13</center>**

Cho dãy số không âm có ~N~ phần tử, số thứ ~i~ có giá trị là ~A_i~. Tìm số ~K~ lớn nhất sao cho:
- ~B =\sum_{i=1}^{N}A_i ⊕ K~, với ~⊕~ là phép toán ~\text{Xor}~
- ~B ≤ M~, với ~M~ là số nguyên không âm cho trước.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số ~N~ và ~M~;
- Dòng thứ hai chứa ~N~ số nguyên ~A_i~.

## Dữ liệu ra:
- In ra một số ~K~ lớn nhất cần tìm, hoặc in ra ~-1~ nếu không tìm ra số K thỏa mãn yêu cầu đề bài.

## Ví dụ:
#### Dữ liệu vào:
```
4 45
30 0 4 11
```

#### Dữ liệu ra:
```
14
```

#### Dữ liệu vào:
```
1 0
123
```

#### Dữ liệu ra:
```
123
```

#### Dữ liệu vào:
```
6 2
5 5 1 5 1 0
```

#### Dữ liệu ra:
```
-1
```

## Giới hạn:
- ~1 ≤ N ≤ 1000, 0 ≤ M ≤ 10^{15}, 0 ≤ A_i ≤ 10^{15}~.