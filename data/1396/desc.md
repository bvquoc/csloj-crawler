**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Đếm số cách chia $n$ chiếc kẹo giống nhau cho $m$ người (có thể có người không nhận được kẹo, nhưng chiếc kẹo nào cũng phải được chia). Hai cách chia được coi là khác nhau nếu $∃i ∈ \{1, 2, … , m\}$ sao cho người thứ $i$ nhận được số kẹo khác nhau ở trong $2$ cách chia. Do kết quả rất lớn, chỉ cần in ra phần dư khi chia cho $T$.

## Dữ liệu vào:
- Một dòng duy nhất ghi $n, m, T$.

## Dữ liệu ra:
- Một số nguyên là kết quả bài toán.

## Ví dụ:
### Dữ liệu vào:
```
4 2 101
```

### Dữ liệu ra:
```
5
```

## Giới hạn:
- $1 ≤ n, m ≤ 10^{18}, 1 ≤ T ≤ 10^6$ trong tất cả các test.
- Subtask $\#1: 1 ≤ n, m ≤ 1000$;
- Subtask $\#2: 1 ≤ n, m ≤ 10^6$, $T$ là số nguyên tố;
- Subtask $\#3: 1 ≤ n, m ≤ 10^6$;
- Subtask $\#4: T$ là số nguyên tố.
- Subtask $\#5:$ Không có ràng buộc bổ sung.