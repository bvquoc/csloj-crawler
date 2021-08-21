**<center>NGUỒN: PVH PreVOI ONLINE 2020 (13 - 14/12/2019)</center>**
<br>

Trường THPT Chuyên Khoa học Tự Nhiên – Đại học Khoa học Tự nhiên – Đại học Quốc gia Hà Nội (tên gọi thân thương: Chuyên Tổng Hợp, Hải Sản Giun Sán – HSGS) là trường chuyên lâu đời và có bảng thành tích ấn tượng nhất Việt Nam. Xuất thân từ các khối chuyên trực thuộc Đại học Tổng Hợp Hà Nội, trải qua hơn 50 năm hình thành và phát triển, trường đều đặn đóng góp cho Việt Nam nhiều tấm huy chương trong các kỳ thi Olympic quốc tế (`IMO, IOI, IPhO, IChO` và `IBO`). Nhiều học sinh sau khi ra trường đã trở thành những giáo sư, tiến sỹ khoa học mang tầm cỡ quốc tế.

Chuyên Tổng Hợp không chỉ nổi tiếng với những thánh nhân đại tài, mà còn nổi tiếng với vườn sưa cổ kính. Suốt bao năm nay, những cây sưa vẫn đứng vững giữa sân trường, đến tháng ~3~ hàng năm vẫn trổ khóm hoa trắng xoá, báo hiệu cuộc chia ly sắp đến và vẫy gọi học sinh cũ về ghé lại mái trường xưa. Hình ảnh sưa trắng trong nền lá xanh biếc đã ghi vào ký ức bao học trò. Nhưng bạn có biết không, cây xanh không chỉ phủ bóng góc sân, mà còn len lỏi vào trong những phòng học đội tuyển.

Nếu có dịp ghé thăm phòng học đội tuyển Tin, bạn sẽ được chiêm ngưỡng những cây dây leo treo quanh tường, những cây hoa xinh xinh trên bệ cửa, và những chậu xương rồng âm thầm sinh sôi. Chuyện kể rằng, để làm tươi mát tâm hồn khô khan của những coder chỉ biết code và code, thầy giáo dẫn đội đã mang về khu vườn mini này. Nhưng khu vườn còn là biểu tượng linh thiêng, báo hiệu những thành quá ấn tượng mà thầy trò đội tuyển sẽ gặt hái. Vào một ngày đầu năm ~2014~, thầy giáo quan sát thấy cây xương rồng nở ~8~ bông hoa. Và ngay hôm sau, tuyển tin Tổng Hợp có ~8~ bạn được vào vòng ~2~.

Để biến trường chuyên từ vườn ươm tài năng thành vườn ươm cây xanh, nhân ngày trường tròn ~55~ tuổi, thầy hiệu trưởng quyết định mang các loại cây về trồng.

Theo kế hoạch ban đầu, thầy định trồng ~𝑛~ loại cây, với số cây mỗi loại được trồng lần lượt là ~𝑎_1, 𝑎_2, … , 𝑎_𝑛~. Mỗi loại có ít nhất hai cây được đặt. Nhận ra số cây đã đặt quá lớn và không đủ diện tích để trồng tập trung, thầy hiệu trưởng chia số cây ra làm nhiều khu vườn. Tuy nhiên, kế hoạch này vấp phải một khó khăn: Thầy muốn các khu vườn giống nhau, nhưng có thể không có cách chọn số khu vườn sao cho các loại cây đều được chia đều vào mỗi khu vườn. Vì vậy, thầy quyết định thay đổi đơn hàng ban đầu. Với mỗi loại cây, công ty cây xanh cho thầy ba sự lựa chọn:
- Mua thêm một cây thuộc loại này 
- Bỏ bớt một cây thuộc loại này 
- Huỷ toàn bộ số cây đã đặt thuộc loại này, nghĩa là không trồng loại này nữa. 

Nếu chọn lựa chọn thứ ba, thầy giáo phải trả cho công ty ~𝑥~ đồng. Nếu chọn một trong hai lựa chọn đầu tiên, thầy giáo phải trả ~𝑦~ đồng. Ngoài ra, để giữ tính thẩm mỹ cho khu vườn, công ty đưa ra thêm ràng buộc: Nếu thầy giáo huỷ toàn bộ số cây loại ~𝑙~ và loại ~𝑟~ ~(1 ≤ 𝑙 ≤ 𝑟 ≤ 𝑛)~, toàn bộ số cây thuộc các loại ~𝑖~ với ~𝑙 ≤ 𝑖 ≤ 𝑟~ cũng phải huỷ bỏ. Lưu ý, nếu không huỷ bỏ một loại cây, số cây thuộc loại đó chỉ có thể thay đổi không quá ~1~. Dĩ nhiên, thầy giáo có thể chọn không thay đổi số lượng cây đã đặt, và không phải trả thêm phí. Thầy hiệu trưởng muốn sửa lại đơn hàng theo quy định của công ty, sao cho có ít nhất ~1~ loại cây được giữ lại, và tồn tại cách chọn số khu vườn (nhiều hơn ~1~) sao cho số cây của mỗi loại đều có thể chia đều vào các khu vườn. Các bạn hãy giúp thầy tính chi phí nhỏ nhất nhé.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~𝑇~ ~(1 ≤ 𝑇 ≤ 4)~ là số thứ tự của subtask chứa test này.
- Dòng thứ hai chứa ba số nguyên ~𝑛, 𝑥~ và ~𝑦~ ~(1 ≤ 𝑛 ≤ 5 \times 10^5, 1 ≤ 𝑥, 𝑦 ≤ 10^9)~ là số loại cây dự định được trồng, chi phí để huỷ bỏ đơn đặt hàng của một loại cây và chi phí để mua thêm hoặc bớt đi một cây thuộc một loại nào đó.
- Dòng thứ ba chứa ~𝑛~ số nguyên ~𝑎_1, 𝑎_2, … , 𝑎_𝑛\ (2 ≤ 𝑎_𝑖 ≤ 10^{12})~ là số cây được đặt hàng ở mỗi loại, theo đơn hàng ban đầu.

## Dữ liệu ra:
- Một số nguyên duy nhất là số tiền nhỏ nhất thầy hiệu trưởng cần bỏ ra, hoặc ~−1~ nếu không có cách nào để thầy hiệu trưởng thay đổi đơn hàng như ý muốn.

## Giới hạn:
- **Subtask** ~\#1~ ~(15\%\text{ số điểm}): 𝑛 ≤ 10~ 
- **Subtask** ~\#2~ ~(20\% \text{ số điểm}): 𝑥 = 10^9\text{ và }𝑦 = 1~ 
- **Subtask** ~\#3~ ~(30\% \text{ số điểm}): 𝑛 ≤ 2000\text{ và }𝑎_𝑖 ≤ 50000~ 
- **Subtask** ~\#4~ ~(35\% \text{ số điểm}):~ Không có ràng buộc gì thêm. 

## Ví dụ:
#### Dữ liệu vào:
```
1
3 1 1
3 5 4
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
2
5 1000000000 1
18 54 30 42 24
```

#### Dữ liệu ra:
```
0
```

#### Dữ liệu vào:
```
3
4 1 5
7 45 90 11
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Trong ví dụ đầu tiên, thầy giáo có thể tăng thêm một cây ở loại ~1~ và huỷ bỏ toàn bộ số cây ở loại ~2~. Khi đó thầy có ~4~ cây mỗi loại ~1~ và ~3~, chia đều được vào ~4~ khu vườn.
- Trong ví dụ thứ hai, số cây hiện tại đã đủ chia vào ~6~ khu vườn, nên thầy không cần thay đổi gì. 
- Trong ví dụ thứ ba, phương án tối ưu là huỷ bỏ các cây thuộc loại ~2, 3~ và ~4~ và giữ nguyên số cây loại ~1~. Lưu ý rằng thầy giáo không thể thay đổi đơn hàng sao cho số cây chia đều vào ~9~ khu vườn; bởi số cây loại ~1~ và ~4~ không thể thay đổi quá ~1~; và nếu loại bỏ cả hai loại cây ~1~ và ~4~, tất cả các loại ~2~ và ~3~ cũng bị huỷ bỏ theo. Nhưng thầy cần giữ lại ít nhất một loại cây.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)