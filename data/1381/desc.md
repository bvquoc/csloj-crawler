<!--**<center>NGUỒN: ĐỀ THI CHỌN ĐỘI TUYỂN HSGQG NĂM 2018 - 2019 - HÀ NAM</center>**-->

Cho đồ thị vô hướng liên thông gồm $n$ đỉnh và $n-1$ cạnh. Cạnh thứ $i$ nối đỉnh $u_i$ với đỉnh $v_i$ có độ dài $w_i$. Cho $Q$ truy vấn thuộc một trong hai loại:
- $1\ x\ y$: In độ dài đường đi ngắn nhất từ đỉnh $x$ đến đỉnh $y$;
- $2\ x\ y\ k$: In đỉnh thứ $k$ trên đường đi ngắn nhất từ $x$ đến $y$.

**Yêu cầu:** Với mỗi truy vấn, tìm kết quả tương ứng.

## Dữ liệu vào:
- Dòng đầu chứa hai số $n,Q\ (1≤n,Q≤10^5)$;
- $n-1$ dòng sau, dòng thứ $i\ (1≤i≤n-1)$ chứa ba số nguyên $u_i,v_i,w_i\ (1≤u_i,v_i,≤n,1≤w_i≤10^6)$;
- $Q$ dòng cuối, mỗi dòng chứa thông tin một truy vấn thuộc một trong hai loại ở trên.

Dữ liệu đảm bảo truy vấn loại $2$ tồn tại đáp số.

## Dữ liệu ra:
- Tương ứng với mỗi truy vấn, ghi kết quả tìm được trên một hàng.

## Ví dụ:
<center><img src="/images/problems/1381/QTREE.svg" width="400px" /></center>

### Dữ liệu vào:
```
6  2
1  2  1
2  4  1
2  5  2
1  3  1
3  6  2
1  4  6
2  4  6  4
```

### Dữ liệu ra:
```
5
3
```

## Giới hạn:
- Subtask $\#1: 30\%$ tổng số điểm có $n≤1000,Q≤10$;
- Subtask $\#2: 30\%$ tổng số điểm tiếp theo có $n,Q≤10^5$ và tất cả các truy vấn là loại $1$;
- Subtask $\#3: 40\%$ tổng số điểm còn lại không có ràng buộc gì thêm.