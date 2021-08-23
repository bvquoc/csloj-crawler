Cho dãy số nguyên dương $a_1,a_2,…,a_n$. Hãy tính tổng **Ước chung lớn nhất** của tất cả các cặp số $a_i,a_j\ (i< j)$.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$;
- Dòng thứ hai chứa $n$ số nguyện dương $a_1,a_2,…,a_n$ được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một dòng duy nhất ghi số nguyên là tổng cần tìm.

## Ví dụ:
### Dữ liệu vào:
```
3
2 3 4
```

### Dữ liệu ra:
```
4
```

### Giải thích:
- $UCLN(2,3)=1$;
- $UCLN(2,4)=2$;
- $UCLN(3,4)=1$.

Do đó ta có tổng là $1+2+1=4$.

**Giới hạn:** $2≤n≤1000;1≤a_i≤10^9$.