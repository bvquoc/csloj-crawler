Xét một trò chơi dành cho $N$ bạn thí sinh, bạn thí sinh thứ $i$ đứng ở vị trí thứ $i$ và thuộc vào nhóm có số hiệu là $A_i$ (có thể có nhóm mang số hiệu nào đó không có thí sinh nào thuộc vào). Ban tổ chức muốn thử độ nhanh nhạy của các thí sinh bằng cách đưa ra $Q$ yêu cầu, mỗi yêu cầu thuộc một trong hai loại:
- Loại $1$ có dạng $1\ L\ R\ X$: Các thí sinh đứng ở vị trí thứ $i$ mà $i ∈ [L, R]$ phải rời khỏi nhóm có số hiệu $A_i$ và gia nhập vào nhóm có số hiệu là $A_i\text{ xor }X$;
- Loại $2$ có dạng $2\ L\ R\ X$: BTC yêu cầu nhóm có số hiệu là $X$ tự tổng hợp và báo cáo kết quả xem có bao nhiêu thí sinh thuộc vào nhóm $X$ đứng ở các vị trí $i$ mà $i ∈ [L, R]$ ở thời điểm hiện tại.

**Yêu cầu:** Hãy trả lời các yêu cầu loại $2$.

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số nguyên dương $N$ và $Q\ (1 ≤ N, Q ≤ 10^5)$;
- Dòng thứ hai gồm $N$ số nguyên không âm $A_1, A_2, \dots, A_N\ (0 ≤ A_i ≤ 10^5)$;
- $Q$ dòng tiếp theo, mỗi dòng là bộ $(1, L, R, X)$ hoặc $(2, L, R, X)$ thể hiện các truy vấn $(1 ≤ L ≤ R ≤ N; 0 ≤ X ≤ 10^5)$.

## Dữ liệu ra:
- Với mỗi yêu cầu loại $2$, bạn cần in ra kết quả tương ứng trên một dòng.

## Ví dụ:
### Dữ liệu vào:
```
5 3
1 2 2 3 5
2 2 4 3
1 2 4 1
2 2 4 3
```

### Dữ liệu ra:
```
1
2
```

### Giải thích:
- Ban đầu, trong đoạn từ $2$ đến $4$ có một thành viên thuộc nhóm $3$. Sau khi yêu cầu thứ $2$ được thực hiện, các thành viên mang số hiệu nhóm là $2$ sẽ chuyển sang nhóm có số hiệu là $3$ và các thành viên có số hiệu nhóm là $3$ lại chuyển sang nhóm có số hiệu là $2$. Từ đó, kết quả bài toán ở yêu cầu thứ $3$ là $2$.