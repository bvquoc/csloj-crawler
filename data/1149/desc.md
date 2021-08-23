**<center>NGUỒN: Contest CSL 2017-2018 Lần 2 (Tháng 1/2018) Day 1</center>**
<br>

Để thu hút khách du lịch người ta quyết định sẽ mở một hành trình xanh trong khu rừng sồi nổi tiếng. Khu rừng có $n$ cây sồi $(1 ≤ n ≤ 3×10^5)$. Cây sồi thứ $i$ mọc ở điểm có tọa độ nguyên $(x_i, y_i)\ (1 ≤ x_i, y_i ≤ 10^9)$. Không có $2$ cây sồi nào mọc cùng một chỗ.

Có $p$ dự án hành trình xanh được đưa ra xem xét $(1 ≤ p ≤ 10^5)$. Mỗi tuyến là chu vi một hình chữ nhật có đỉnh tọa độ nguyên và cạnh song song với trục tọa độ. Để tạo tuyến du lịch, những cây sồi nằm trên tuyến sẽ phải đốn hạ. Các cây ở trong hình chữ nhật không ảnh hưởng đến đường đi, vì vậy vẫn được để nguyên.  Không ai muốn chặt hạ sồi, vì vậy khi cân nhắc chọn dự án, người ta muốn với mỗi dự án sẽ có bao nhiêu cây sồi phải đốn hạ.

**Yêu cầu**: Cho $n, p$, tọa độ các cây sồi, tọa độ đỉnh dưới trái và trên phải của hình chữ nhật xác định tuyến hành trình. Hãy xác định số cây sồi phải đốn hạ ở mỗi dự án.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n$; 
- Mỗi dòng trong $n$ dòng tiếp theo chứa hai số nguyên xác định tọa độ một cây sồi;
- Dòng thứ $n+2$ chứa số nguyên $p$; 
- Mỗi dòng trong $p$ dòng sau chứa $4$ số nguyên $a, b, c$ và $d$ xác định tọa độ dưới trái $(a, b)$ và trên phải $(c, d)$ của hành trình. 

## Dữ liệu ra:
- Ghi ra $p$ số nguyên, mỗi số nguyên trên một dòng. Số nguyên thứ $j$ ứng với số cây sồi phải đốn hạ ở dự án $j$.

## Ví dụ:
<center><img src="/images/problems/1149/oaks.svg" width=400px></center>
<center>Hình minh họa</center>

### Dữ liệu vào:
```
6  
1 2  
3 2  
2 3  
2 5  
4 4  
6 3  
4  
2 2 4 4  
2 2 6 5  
3 3 5 6  
5 1 6 6
```

### Dữ liệu ra:
```
3
4
0
1
```

## Giới hạn:
- $30\%$ số test có $1 ≤ X_1 < X_2 ≤ 1000, 1 ≤ Y_1 < Y_2 ≤ 1000$.
- $60\%$ số test khác có $1 ≤ X_1 < X_2 ≤ 10^6, 1 ≤ Y_1 < Y_2 ≤ 10^6$. 
