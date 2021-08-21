Cho một dãy gồm $n$ số nguyên, tìm phần tử bé nhất và lớn nhất trong dãy.

## Dữ liệu vào:
- Dòng đầu tiên chứa duy nhất một số nguyên dương $n$ (số phần tử trong dãy).
- Dòng thứ hai chứa n số nguyên là các phần tử $a_1,a_2,…,a_n$

## Dữ liệu ra:
- In ra trên một dòng bốn số theo thứ tự như sau: số bé nhất, vị trí số bé nhất, số lớn nhất, vị trí của số lớn nhất (các số cách nhau bởi một dấu cách, thứ tự tính từ $1$).

**Chú ý:** Nếu có nhiều số bằng nhau và cùng bé nhất thì chọn số xuất hiện đầu tiên (tương tự đối với số lớn nhất)

## Ví dụ:
#### Dữ liệu vào:
```
5
2 1 1 2 3
```

#### Dữ liệu ra:
```
1 2 3 5
```

#### Dữ liệu vào:
```
5
3 1 3 1 2
```

#### Dữ liệu ra:
```
1 2 3 1
```

## Giới hạn:
- $1≤n≤10^5,-10^9≤a_i≤10^9$