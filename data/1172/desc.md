**<center>NGUỒN: PVH PreVOI ONLINE 2020 (13 - 14/12/2019)</center>**
<br>

Tháng $7$ vừa qua, thương hiệu trà sữa TocoToco vừa cho ra mắt một loại đồ uống mới với tên gọi khá kì lạ “Tiger Sugar” – “Sữa tươi trân châu đường hổ. Đây được coi là một cú hích mạnh mẽ sau phong trào “Sữa tươi trân châu đường đen” mới nổi; hứa hẹn tạo ra một phong cách mới trong kho tàng cách pha chế trà sữa vốn đã rất phong phú.

Tiger Sugar là sự kết hợp đồng điệu của các thành phần: Sữa tươi thanh trùng, siro đường hổ và trân châu đen. Trong đó, "đường hổ" là cái tên được nhiều bạn trẻ quan tâm bởi sự lạ lẫm của nó. Thực ra, siro đường hổ là thành quả của quá trình cô đường nâu (loại đường quen thuộc trong dân gian) theo bí kíp rất riêng của TocoToco. Những giọt siro đường nâu chạy dọc thân cốc, tạo ra những đường vân đẹp mắt, mạnh mẽ như vân của loài hổ. (Nguồn: kênh 14)

Để quảng bá cho sản phẩm vô cùng độc và lạ này, vào năm ngoái, TocoToco quyết định mở hàng loạt những chi nhánh mới trên khắp thành phố Hà Nội. Bản đồ Hà Nội được vẽ trên mặt phẳng toạ độ Descartes `𝑂𝑥𝑦`. Khu vực nội đô là hình vuông với hai góc đối diện có toạ độ là $(−10^8, −10^8)$ và $(10^8, 10^8)$. TocoToco đã mở $𝑛$ cửa hàng, cửa hàng thứ $𝑖$ nằm ở điểm có toạ 
độ $(𝑥_𝑖, 𝑦_𝑖)$.

Tuy sản phẩm sữa tươi trân châu đường hổ đã đạt được thành công vang dội nhưng TocoToco lại không thu về lợi nhuận như mong muốn. Lí do là vì các cửa hàng được đặt cách quá xa nhau, khiến cho chi phí vận chuyển vô cùng lớn. Do đó, TocoToco muốn di dời 𝑛 cửa hàng này sao cho **tổng khoảng cách Manhattan** giữa mọi cặp cửa hàng là nhỏ nhất có thể. Tuy nhiên, để đảm bảo không làm phật lòng những khách hàng lâu năm, TocoToco sẽ di dời các cửa hàng sao cho tổng khoảng cách Manhattan giữa vị trí cửa hàng cũ và vị trí cửa hàng mới tương ứng không vượt quá $𝑘$.

TocoToco treo giải thưởng $998244353$ ly sữa tươi trân châu đường hổ miễn phí cho ai tìm ra vị trí tốt nhất để đặt xưởng chế biến và các cửa hàng. Là một fan cuồng của thúc uống này, Nhi muốn giải bài toán để được uống trà sữa miễn phí cả đời. Nhưng do mới học hết lớp $10$, Nhi chưa thể giải được bài này. Các bạn hãy giúp Nhi nhé.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $𝑛$ và $𝑘$ $(1 ≤ 𝑛 ≤ 2 \times 10^5, 0 ≤ 𝑘 ≤ 10^8)$ là số cửa hàng TocoToco đang có và giới hạn tổng khoảng cách Manhattan giữa vị trí cũ và vị trí mới của $𝑛$ cửa hàng này.
- Trong $𝑛$ dòng tiếp theo, dòng thứ $𝑖$ chứa hai số nguyên $𝑥_𝑖$ và $𝑦_𝑖$ $(−10^8 ≤ 𝑥_𝑖, 𝑦_𝑖 ≤ 10^8)$ là toạ độ vị trí hiện tại của cửa hàng thứ $𝑖$.

## Dữ liệu ra:
- Dòng đầu tiên chứa một số nguyên là tổng khoảng cách Manhattan nhỏ nhất giữa mọi cặp cửa hàng sau khi di chuyển.
- Trong $𝑛$ dòng tiếp theo, dòng thứ $𝑖$ chứa hai số nguyên thể hiện toạ độ vị trí của cửa hàng thứ $𝑖$ sau khi di chuyển.
Nếu có nhiều phương án di chuyển tối ưu, bạn được phép in ra phương án bất kì.

## Giới hạn:
- **Subtask** $\#1\ (10\% \text{ số điểm}): 𝑛 ≤ 3$
- **Subtask** $\#2\ (15\% \text{ số điểm}): 𝑛 ≤ 10^3$ và $𝑘 ≤ 2$
- **Subtask** $\#3\ (25\% \text{ số điểm}): 𝑘 ≤ 10^5$
- **Subtask** $\#4\ (50\% \text{ số điểm}):$ Không có ràng buộc gì thêm 

## Ví dụ:
#### Dữ liệu vào:
```
4 4
1 4
2 3
3 2
4 1
```

#### Dữ liệu ra:
```
8
2 3
2 3
3 2
3 2
```

#### Dữ liệu vào:
```
3 100
0 7
-4 2
-9 20
```

#### Dữ liệu ra:
```
0
15 21
15 21
15 21
```