**<center>NGUỒN: VOI Training Camp 3H  (Ngày 02/11/2016 Am)</center>**
<br>

Cho một tập các hình trụ $V = \{V_1, V_2, …, V_n\}$ trong đó: 
- Hình trụ $V_i$ có chiều cao $h_i$, bán kính $r_i$ là các số nguyên thỏa mãn $0 < h_i, r_i ≤ 10^6\ (i = 1, 2, …, n)$
- Các hình trụ có bán kính đôi một khác nhau.

Các hình trụ có thể xếp chồng lên nhau để tạo thành một `Cột trụ` theo quy tắc: Chỉ hình trụ có bán kính nhỏ hơn có thể được xếp chồng lên hình trụ có bán kính lớn hơn, nghĩa là với mọi $V_i, V_j  ϵ V: V_i$ xếp chồng được lên $V_j$ khi và chỉ khi $r_i  < r_j$. Chiều cao của `Cột trụ` là tổng chiều cao của các hình trụ được xếp trong `Cột trụ` đó.

**Yêu cầu:** Đối với chiều cao $h$ nguyên dương cho trước, tính số lượng hình trụ cần ít nhất để xếp thành `Cột trụ` có chiều cao không nhỏ hơn $h$.

## Dữ liệu vào:
- Dòng đầu tiên chứa chứa số $t$ cho biết số lượng test. Các nhóm dòng tiếp theo chứa các test:
	- Dòng đầu tiên của test chứa số $n$ và $h$ lần lượt là số lượng hình trụ và chiều cao giới hạn của `Cột trụ`
	- $n$ dòng tiếp theo trong, mỗi dòng chứa hai số $h_i$ và $r_i$ cho biết chiều cao và bán kính của hình trụ thứ $i$ trong test.

## Dữ liệu ra:
- Ghi ra $t$ dòng, mỗi dòng một số nguyên cho biết kết quả của mỗi test, nếu không có cách xếp trụ in ra `-1`.

## Ví dụ:
#### Dữ liệu vào:
```
2
3 2
1 5
2 3
3 1
4 8
2 5
3 2
1 3
1 1
```

#### Dữ liệu ra:
```
1
-1
```