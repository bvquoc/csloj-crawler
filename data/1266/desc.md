**<center>NGUỒN: Bài tập Đội Bắc Giang ôn thầy Đỗ Đức Đông - Tháng 10/2017</center>**

Cho $𝒏$ véc tơ , mỗi véc tơ có $𝒎$ thành phần. Hai véc tơ $𝑼(𝒖_𝟏, 𝒖_𝟐, … , 𝒖_𝒎)$ và véc tơ $𝑽(𝒗_𝟏, 𝒗_𝟐, … , 𝒗_𝒎)$ được gọi là có “quan hệ” với nhau nếu tồn tại $(α_𝟏, α_𝟐, … , α_𝒎)$ là hoán vị của $𝒎$ thành phần véctơ $𝑼$ và $(β_𝟏, β_𝟐, … , β_𝒎)$ là hoán vị của $𝒎$ thành phần véctơ $𝑽$ sao cho $α_𝒊 ≤ β_𝒊\ (∀𝒊 = 𝟏. . 𝒎)$ hoặc $α_𝒊 ≥ β_𝒊\ (∀𝒊 = 𝟏. . 𝒎)$.

**Yêu cầu:** Chia $𝒏$ véc tơ cho trước thành ít nhóm nhất sao cho trong mỗi nhóm không có hai véc tơ nào có “quan hệ” với nhau.

## Dữ liệu vào:
- Dòng đầu ghi hai số $𝒏, 𝒎$;
- $𝒏$ dòng tiếp theo, dòng thứ $𝒊$ ghi $𝒎$ thành phần của véc tơ thứ $𝒊$.

## Dữ liệu ra:
- Dòng đầu ghi $𝒌$ là số nhóm ít nhất được chia;
- $𝒌$ dòng tiếp theo, dòng thứ $𝒊$ dòng ghi chỉ số của các vectơ được chọn vào nhóm 
thứ $𝒊$.

## Ví dụ:
### Dữ liệu vào:
```
4 3
1 1 1
1 2 3
2 2 2
2 1 1
```

### Dữ liệu ra:
```
3
1
2 3
4
```

## Giới hạn:
- $𝒏 ≤ 𝟏𝟎𝟎𝟎, 𝒎 ≤ 𝟐𝟎$.