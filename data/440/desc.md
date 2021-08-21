Hiện đang vào mùa thu hoạch ngô, nhà Tí có một chiếc công nông tải trọng có hạn, chỉ chở được tối đa $C$ (kg), trong khi đó nhà Tí lại thu được $N$ bao ngô, bao thứ $i$ có khối lượng là $w_i$ (kg), hãy giúp Tí tính xem một chuyến xe nhà Tí có thể chở được khối lượng ngô tối đa là bao nhiêu?

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $N,C$;
- Dòng thứ hai chứa $N$ số nguyên dương $w_1, w_2, …, w_N$, mỗi số cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là khối lượng ngô tối đa xe nhà tí chở được trong một chuyến.

## Ví dụ:
#### Dữ liệu vào:
```
5 259
81 58 42 33 61
```

#### Dữ liệu ra:
```
242
```

#### Giải thích:
- Chở các bao ngô số $1, 2, 3, 5$ ta có tổng khối lượng là: $81+58+42+61 = 242$, đây là tổng khối lượng ngô lớn nhất có thể chở được.

## Giới hạn:
- $1 ≤ N ≤ 20, 1 ≤ C, w_i ≤ 50000$.