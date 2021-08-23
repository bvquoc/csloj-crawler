**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIII (TUYÊN QUANG 2017)</center>**
<br>

Xét lưới ô vuông vô hạn trong đó có một số ô cấm, các ô còn lại là tự do. Các dòng và cột của lưới được đánh số theo thứ tự bởi các số nguyên $…,-3,-2,-1, 0, 1, 2, 3,…$. Các cột được đánh số theo thứ tự từ trái sang phải, còn các dòng theo thứ tự từ dưới lên trên. Ô nằm trên giao của dòng $x$ và cột $y$ được gọi là ô $(x, y)$. Một siêu mã đặt ở ô xuất phát là ô $(0,0)$. Sau một bước đi, ta có thể di chuyển siêu mã đến một trong các ô ở đỉnh đối diện trên đường chéo của hình chữ nhật kích thước $k×l$.
<center><img src="/images/problems/809/sknight.svg", width=400px></center>

**Yêu cầu**: Cho biết $k, l$ và toạ độ của các ô cấm, vị trí ô đích nơi siêu mã cần đến, hãy tìm cách di chuyển siêu mã từ ô $(0,0)$ đến ô đích sao cho số lượng bước đi cần thực hiện là ít nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $k, l\ (k, l ≤ 5)$ được ghi cách nhau bởi dấu cách;
- Dòng thứ hai chứa hai số nguyên $x_t, y_t$ được ghi cách nhau bởi dấu cách cho biết toạ độ của ô đích là $(x_t, y_t)$;
- Dòng thứ ba chứa số nguyên không âm $n\ (n ≤ 1000)$ là số lượng ô cấm;
- Dòng thứ $i$ trong số $n$ dòng tiếp theo chứa hai số nguyên được ghi cách nhau bởi dấu cách $x_i, y_i$ cho biết $(x_i, y_i)$ là toạ độ của ô cấm thứ $i\ (i = 1, 2, …, n)$.

## Dữ liệu ra:
- Ghi ra một số nguyên là số lượng bước đi ít nhất cần thực hiện để di chuyển siêu mã từ ô xuất phát $(0,0)$ đến ô đích. Ghi số $−1$ nếu như không thể di chuyển siêu mã đến ô đích. 

## Ví dụ:
### Dữ liệu vào:
```
2 3
2 4
0
```

### Dữ liệu ra:
```
2
```

## Ràng buộc:
- Có $40\%$ số test có $n = 0, k=2, l=3\text{ và }0 ≤ x_t, y_t≤ 10$;  
- Có $30\%$ số test có $−10^3 ≤ x_t, y_t≤ 10^3;  −10^3 ≤ x_i, y_i≤ 10^3$;
- Có $20\%$ số test có $n = 0, k=2, l=3\text{ và }−10^6 ≤ x_t, y_t≤ 10^6$;  
- Có $10\%$ số test còn lại có $n = 0\text{ và }−10^6 ≤ x_t, y_t≤ 10^6$.