**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 2</center>**

Trung tâm máy tính cần phân máy thực hành cho $N$ lớp sinh viên (được đánh số từ $1$ đến $N$). Lớp sinh viên $i$ có $X_i$ sinh viên. Trong trung tâm có $M\ (M \ge N)$ phòng máy được đánh số từ $1$ đến $M$. Phòng máy $j$ có $Y_j$ máy. Để đảm bảo việc hướng dẫn thực hành, mỗi sinh viên cần có một máy, ngoài ra còn cần một máy cho giáo viên hướng dẫn. Không được phép di chuyển máy từ phòng máy này sang phòng máy khác.

**Yêu cầu:** Xác định số lượng lớn nhất các lớp sinh viên có thể đồng thời phân bố mỗi lớp vào một phòng máy và sao cho trong mỗi phòng máy mỗi sinh viên có một máy riêng để làm việc và ngoài ra còn một máy dành cho giáo viên hướng dẫn.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $N, M\ (1 \le N \le M \le 20000)$;
- Dòng thứ hai chứa $N$ số nguyên $X_1, \dots, X_N\ (1 \le X_i \le 21000, 1 \le i \le N)$;
- Dòng thứ ba chứa $M$ số nguyên $Y_1, \dots, Y_M\ (1 \le Y_j \le 21000, 1 \le j \le M)$.

## Dữ liệu ra:
- Dòng đầu tiên ghi $P$ là số lượng lớn nhất lớp sinh viên tìm được;
- Dòng thứ hai ghi $N$ số, trong đó số thứ $i$ cho biết chỉ số phòng máy phân cho lớp $i$ theo cách phân bố tìm được (ghi số $0$ nếu lớp $i$ không được phân phòng máy).

## Ví dụ:
### Dữ liệu vào:
```
3 4
5 3 4
3 5 3 6
```

### Dữ liệu ra:
```
2
0 2 4
```