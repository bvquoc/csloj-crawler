Lớp $10$ Tin có $N$ học sinh, trong giờ thể dục, thầy giáo yêu cầu chia thành $K$ nhóm, mỗi nhóm có tối thiểu một bạn, rất nhanh chóng bạn lớp trưởng đã cho lớp chia thành $K$ nhóm theo yêu cầu của thầy. Nhưng Tí lại nẩy sinh một câu hỏi: Có bao nhiêu cách chia thỏa yêu cầu của thầy Thể dục? (Các hoán vị của các nhóm được xem là $1$ cách)

## Dữ liệu vào:
- Dòng đầu chứa số nguyên $T$ là số bộ test;
- $T$ dòng tiếp theo, mỗi dòng chứa hai số nguyên dược $N$ và $K$

## Dữ liệu ra:
- Ứng với mỗi test, ghi ra trên một dòng đáp số tương ứng.

## Ví dụ:
#### Dữ liệu vào:
```
2
4 2
3 3
```

#### Dữ liệu ra:
```
7
1
```

#### Giải thích:
- Test case $\#1$: Giả sử $4$ bạn là $A,B,C,D$ cần chia thành $2$ nhóm ta có các cách sau: $(1): ABC, D; (2) ABD, C; (3) ACD, B; (4) BCD, A; (5) AB, CD; (6) AC, BD; (7) AD, BC$;
- Test case $\#2$: Giả sử $3$ bạn là $A, B, C$ ta chỉ có duy nhất một cách chia thành $3$ nhóm là: $A; B; C$

## Giới hạn:
- $1 ≤ K ≤ N ≤ 25$