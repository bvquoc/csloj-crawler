Xét dãy fibonacci như sau:
- $f_0 = 0$ và $f_1 = 1$;
- $f_i = f_{i−1} + f_{i−2}, \forall i ≥ 2$.

**Yêu cầu:** Tính giá trị $f_{f_A}$ theo modulo của $M$.

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa hai số nguyên dương $A$ và $M\ (3 ≤ A, M ≤ 10^9)$.

## Dữ liệu ra:
- Một số nguyên duy nhất là kết quả bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
6 100
```

#### Dữ liệu ra:
```
21
```

#### Giải thích:
- Ta có: $f_6 = 8$ nên $f_{f_6} = f_8 = 21$ và tính theo modulo $100$ vẫn là $21$.