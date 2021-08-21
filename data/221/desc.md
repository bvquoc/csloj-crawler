Cho dãy số nguyên $A=(a_1,a_2,…,a_n)$. Hãy tìm một đoạn gồm các phần tử liên tiếp trong dãy $A: a_L,a_{L+1},…,a_{H-1},a_H$ thỏa mãn hai điều kiện:
- Các phần tử trong đoạn có thứ tự không giảm: $a_L≤a_{L+1}≤⋯≤a_{H-1}≤a_H$;
- Số phần tử trong đoạn là nhiều nhất có thể.

**Quy ước:** Đoạn chỉ gồm đúng $1$ phần tử trong dãy $A$ cũng được coi là có thứ tự không giảm.

## Dữ liệu vào:
- Dòng đầu Số nguyên dương $N$ tương ứng số lượng phần tử của dãy $A$ $(N≤10^5)$;
- Dòng tiếp theo chứa $N$ số nguyên $a_1,a_2,…,a_n\ (∀i:|a_i|≤10^9)$.

## Dữ liệu ra:
- Ghi ra một số duy nhất là số lượng phần tử của đoạn không giảm dài nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
12
88 99 11 22 22 33 11 66 33 44 55 77
```

#### Dữ liệu ra:
```
4
```