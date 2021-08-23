**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 Day 2- Hải Phòng 2020</center>**

Cho đồ thị vô hướng liên thông $N$ đỉnh, $N – 1$ cạnh. Các đỉnh được đánh số từ $1$ đến $N$. Độ dài đường đi từ đỉnh $a$ đến đỉnh $b$ là số lượng đỉnh mà đường đi đi qua.

**Ví dụ:** Cho cây như hình vẽ:
<center><img src="/images/problems/1360/TREE.svg" width="320px" /></center>

Trong ví dụ trên, đường đi dài nhất trên cây là đường đi từ đỉnh $1$ đến đỉnh $5$ (độ dài bằng $4$) hoặc là đường đi từ đỉnh $2$ đến đỉnh $5$ cũng có độ dài bằng $4$. Như vậy có tất cả $2$ con đường đều có độ dài dài nhất.

**Yêu cầu:** Hãy xác định độ dài đường đi dài nhất trên cây và số lượng con đường dài nhất này?

## Dữ liệu vào:
- Dòng đầu ghi số nguyên $N\ (3≤N≤4×10^5)$ là số lượng đỉnh của cây.
- $N-1$ dòng tiếp theo, mỗi dòng ghi hai số nguyên $i$ và $j$ tương ứng là có cạnh nối đỉnh $i$ và đỉnh $j\ (1≤i,j≤N)$.

## Dữ liệu ra:
- Đưa ra hai số nguyên tương ứng là độ dài đường đi dài nhất trên cây và số lượng đường đi dài nhất trên cây.

## Ví dụ:
### Dữ liệu vào:
```
5
1 3
2 3
3 4
4 5
```

### Dữ liệu ra:
```
4 2
```

**Chú ý:** Bài này chấm theo từng ý, trình chấm sẽ **đọc hai số nguyên tương ứng với hai ý**, mỗi ý đúng được $50\% số điểm một test. (Bạn chỉ trả lời một ý cũng phải ghi ra hai số nguyên).

## Giới hạn:
- $40\%$ số điểm có $N≤5000$.