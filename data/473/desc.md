**<center>(Tham khảo bài Post Đề đề xuất DHBB 2017 của THPT CHUYÊN NGUYỄN TẤT THÀNH – YÊN BÁI)</center>**

Trên quốc lộ ~6~ mà ta coi như một trục tọa độ có ~N~ hộ dân cư sinh sống tại các điểm có tọa độ là các số nguyên phân biệt ~x_1, x_2, …, x_N~ (theo thứ tự tăng dần). Công ty cấp nước muốn lắp ~K~ trạm cấp nước cho dân cư nơi đây, sau khi lắp các trạm cấp nước, công ty cấp nước sẽ kéo đường ống về cho tất cả các hộ dân cư sử dụng, hộ dân cư nào ở gần trạm cấp nước nào nhất sẽ được kéo đường ống từ trạm cấp nước đó. Bạn được giao nhiệm vụ tìm vị trí đặt ~K~ trạm cấp nước thỏa mãn các điều kiện sau:
- Các điểm đặt các trạm cấp nước là phân biệt.
- Mỗi trạm cấp nước được đặt trùng với tọa độ của một hộ dân cư nào đó (để tiện việc bảo vệ, trông coi).
- Tổng độ dài đường ống để kéo từ các trạm cấp nước về các hộ dân cư là nhỏ nhất (giả sử tọa độ một trạm cấp nước là ~x~, tọa độ của một hộ dân cư là ~x’~ thì độ dài đường ống cần kéo từ trạm cấp nước tới hộ dân cư đang xét là ~|x – x’|~).

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N~ và ~K~ được ghi cách nhau một dấu cách.
- Dòng thứ hai chứa ~N~ số nguyên ~x_1, x_2, …, x_N~ là tọa độ các hộ dân cư, hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Dòng đầu chứa tổng độ dài đường ống cần sử dụng.
- Dòng thứ hai chứa ~K~ số nguyên theo thứ tự tăng dần là tọa độ lắp đặt các trạm cấp nước, hai số liên tiếp được ghi cách nhau một dấu cách. Nếu có nhiều phương án lắp đặt, hãy đưa ra phương án bất kỳ.

## Ví dụ:
#### Dữ liệu vào:
```
4 2
1 2 3 5
```

#### Dữ liệu ra:
```
2
2 5
```

#### Giải thích:
- Với cách lắp ~2~ trạm cấp nước như trên thì các hộ dân cư thứ ~1, 2, 3~ sẽ được lấy nước từ trạm số ~1~ (có tọa độ là ~2~), hộ dân cư thứ ~4~ sẽ lấy nước từ trạm số ~2~ (có tọa độ là ~5~). Tổng đường ống cần dùng là ~2~.

## Giới hạn:
- ~1 < N ≤ 300; 1 < K ≤ 30; 0 ≤ x_i ≤ 10000~.